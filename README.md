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

## Next step

In the next step we will be using the endpoint `https://pokeapi.co/api/v2/pokemon/:id` to retrieve the informations, we will using a TDD approach to write the parser of the response

to view the next step click [here](https://github.com/zanza00/testing-with-pokemon/tree/1_call_and_console_log)
