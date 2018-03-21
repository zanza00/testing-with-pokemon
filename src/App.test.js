import React from 'react';
import ReactDOM from 'react-dom';

import App, { parseResponse } from './App';
import squirtle from './responses/squirtle';
import bulbasaur from './responses/bulbasaur';
import charmander from './responses/charmander';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Response Parse', () => {
    it('can parse the response for squirtle', () => {
        const response = squirtle;

        // Same object that we had before
        const expected = {
            id: 7,
            name: 'Squirtle',
            image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
            types: ['water'],
        };

        const result = parseResponse(response);

        expect(result).toEqual(expected);
    });
    it('can parse the response for bulbasaur', () => {
        const response = bulbasaur;
    
        // Same object that we had before
        const expected = {
            id: 1,
            name: 'Bulbasaur',
            image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            types: ['grass', 'poison'],
        };
    
        const result = parseResponse(response);
    
        expect(result).toEqual(expected);
    });
    it('can parse the response for charmander', () => {
        const response = charmander;
    
        // Same object that we had before
        const expected = {
            id: 4,
            name: 'Charmander',
            image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
            types: ['fire'],
        };
    
        const result = parseResponse(response);
    
        expect(result).toEqual(expected);
    });
});
