# Testing with Pokemon

A simple example on how to use TDD with a parser for the [PokéApi](https://pokeapi.co/)

## How to use

Project created using [react-create-app](https://github.com/facebook/create-react-app), for a more comprehensive documentation refer to its [User guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)

### Basic Commands

* install -> `yarn` _or_ `npm i`

* Run -> `yarn start` _or_ `npm start`

* Test -> `yarn test` _or_ `npm test`

## Step 0

In this step there is very simple application: you can select one of three pokemon and after 3 second (to simulate a network call) it will be displayed.

## Step 1

In this step we have changed the info that populate the `<select />` removing pokemon data and added the `url` to call for the three choices.

We have added the function to `parse` the response and setup a way to test it.

Right now the UI will not be updated because we simply `console.log` the response data.

N.B. Here i'm using [Axios](https://github.com/axios/axios) because I wanted to try it :sunglasses:

## Step 2

In the next step we will be using the data returned by the PokéAPI for **Squirtle** to implement a test with a simple parser

First we need to save the response for `Squirtle`, save it in `src/responses/squirtle.js` **Waring** it's a veeeery big response. (like 10k lines)

```javascript
// src/responses/squirtle.js

export default {
    //...
};
```

Inside `App.js` export and create a function to parse the response

```javascript
// src/App.js
export function parseResponse(response) {
    const result = response;
    return result;
}
```

use that function to parse and save in state

```javascript
handlePokemonChange(e) {
    // code
axios
    .get(selectedPokemon.url)
    .then(res => {
        console.log(res.data);
        const pokemon = parseResponse(res.data);
        this.setState({ pokemon, loading: false });
    })
    .catch(e => console.error(e));
```

inside `App.test.js` create a test (that will fail when runned) and import the necessary things

```javascript
import App, { parseResponse } from './App';
import squirtle from './responses/squirtle';

// other test

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
});
```

Now start to implement the parser.

When the test will pass the app will correctly display the pokemon data :)

## Next step

Now test also Charmender and Bulbasaur using the following tests, **remember to save the responses**

```javascript
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
```

to view the next step click [here](https://github.com/zanza00/testing-with-pokemon/tree/3_testing_three_starters)
