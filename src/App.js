import React, { PureComponent } from 'react';

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
        name: 'Bulbasaur',
        image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['grass'],
    },
    {
        id: 4,
        name: 'Charmander',
        image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        types: ['fire'],
    },
    {
        id: 7,
        name: 'Squirtle',
        image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        types: ['water'],
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
            setTimeout(() => {
                this.setState({ pokemon: selectedPokemon, loading: false });
            }, 3000);
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
