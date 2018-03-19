import React, { PureComponent } from "react";

import Pokemon from "./components/Pokemon";

import logo from "./Poke_Ball_icon.svg";
import "./App.css";

const pokemonList = [
    {
        id: 1,
        name: "Bulbasaur",
        image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        types: ["grass"]
    },
    {
        id: 4,
        name: "Charizard",
        image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        types: ["fire"]
    },
    {
        id: 7,
        name: "Squirtle",
        image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        types: ["water"]
    }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            pokemon: pokemonList[getRandomInt(pokemonList.length)]
        };

        this.handlePokemonChange = this.handlePokemonChange.bind(this);
    }

    handlePokemonChange(e) {
        console.log(e.target.value);
        const selectedPokemon = pokemonList.find(
            ({ id }) => id === parseInt(e.target.value, 10)
        );
        this.setState({ pokemon: selectedPokemon });
    }

    render() {
        const { pokemon } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Choose your Pokemon</h1>
                </header>
                <select onChange={this.handlePokemonChange} value={pokemon.id}>
                    {pokemonList.map(pokemon => (
                        <option key={pokemon.id} value={pokemon.id}>
                            {pokemon.name}
                        </option>
                    ))}
                </select>
                <Pokemon {...pokemon} />
            </div>
        );
    }
}

export default App;
