import React, { PureComponent } from 'react';

import Pokemon from './components/Pokemon';

import logo from './Poke_Ball_icon.svg';
import './App.css';

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            pokemon: {
                name: 'Bulbasaur',
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                types: ['grass']

            },
        };

        this.handlePokemonChange = this.handlePokemonChange.bind(this);
    }

    handlePokemonChange(e) {
        console.log(e.target.value);
    }
    render() {
        const {pokemon} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Choose your Pokemon</h1>
                </header>
                <select onChange={this.handlePokemonChange}>
                    <option value="1">Bulbasaur</option>
                    <option value="4">Charizard</option>
                    <option value="7">Squirtle</option>
                </select>
                <Pokemon
                    {...pokemon}
                />
            </div>
        );
    }
}

export default App;
