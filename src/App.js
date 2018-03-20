import React, { PureComponent } from 'react';
import axios from 'axios';

import Pokemon from './components/Pokemon';
import Loader from './components/Loader';

import logo from './Poke_Ball_icon.svg';
import './App.css';

const optionList = [
    {
        id: 0,
        name: 'Choose your Pokémon',
    },
    {
        id: 1,
        name: 'Bulbasaur',
        uri: 'https://pokeapi.co/api/v2/pokemon/1',
    },
    {
        id: 4,
        name: 'Charizard',
        uri: 'https://pokeapi.co/api/v2/pokemon/4',
    },
    {
        id: 7,
        name: 'Squirtle',
        uri: 'https://pokeapi.co/api/v2/pokemon/7',
    },
];

export function parseResponse(response) {
    const result = {
        id: response.id,
        name: response.name,
        image: response.image,
        types: response.types,
    };
    return result;
}

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            pokemon: { name: 'placeholder', types: ['none'], image: logo },
            loading: false,
        };

        this.handlePokemonChange = this.handlePokemonChange.bind(this);
    }

    handlePokemonChange(e) {
        console.log(e.target.value);
        if (e.target.value === '0') return;
        this.setState({ loading: true });
        const selectedPokemon = optionList.find(
            ({ id }) => id === parseInt(e.target.value, 10),
        );
        axios
            .get(selectedPokemon.uri)
            .then(res => console.log(res.data))
            .catch(e => console.error(e));
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
