import React, { PureComponent } from 'react';
import axios from 'axios';

import Pokemon from './components/Pokemon';
import Loader from './components/Loader';

import logo from './Poke_Ball_icon.svg';
import placeholderImage from './Placeholder.png';
import './App.css';

const optionList = [
    {
        id: 0,
        name: 'Choose your Pokémon',
    },
    {
        id: 1,
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        name: 'Bulbasaur',
    },
    {
        id: 4,
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
        name: 'Charmander',
    },
    {
        id: 7,
        url: 'https://pokeapi.co/api/v2/pokemon/7/',
        name: 'Squirtle',
    },
];

const placeholder = {
    name: 'missingno',
    types: ['none'],
    image: placeholderImage,
};

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            pokemon: { name: 'Choose your Pokémon' },
            loading: false,
        };

        this.handlePokemonChange = this.handlePokemonChange.bind(this);
    }

    handlePokemonChange(e) {
        console.log(e.target.value);
        const value = parseInt(e.target.value, 10);
        if (value === 0) {
            this.setState({ pokemon: placeholder });
        } else {
            this.setState({ loading: true });
            const selectedPokemon = optionList.find(({ id }) => id === value);
            axios
                .get(selectedPokemon.url)
                .then(res => {
                    console.log(res.data);
                    this.setState({ loading: false });
                })
                .catch(e => console.error(e));
        }
    }

    render() {
        const { pokemon, loading } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Choose your Pokemon</h1>
                </header>
                <select onChange={this.handlePokemonChange} value={pokemon.id}>
                    {optionList.map(pokemon => (
                        <option key={pokemon.id} value={pokemon.id}>
                            {pokemon.name}
                        </option>
                    ))}
                </select>
                {loading ? <Loader /> : <Pokemon {...pokemon} />}
            </div>
        );
    }
}

export default App;
