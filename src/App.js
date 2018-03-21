import React, { PureComponent } from 'react';
import axios from 'axios';

import Pokemon from './components/Pokemon';
import Loader from './components/Loader';
import optionList from './pokemonList';

import logo from './Poke_Ball_icon.svg';
import placeholderImage from './Placeholder.png';
import './App.css';

const placeholder = {
    name: 'missingno',
    types: ['none'],
    image: placeholderImage,
};

export function parseResponse(response) {
    const result = {
        id: response.id,
        name: response.name.charAt(0).toUpperCase() + response.name.slice(1),
        image: response.sprites.front_default,
        types: response.types
            .sort((a, b) => a.slot - b.slot)
            .map(({ type }) => type.name),
    };
    return result;
}

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
                    const pokemon = parseResponse(res.data);
                    this.setState({ pokemon, loading: false });
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
