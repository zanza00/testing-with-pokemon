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

## Next step

In the next step we will be using the data returned by the PokéAPI for **Squirtle** to implement a test with a simple parser

to view the next step click [here](https://github.com/zanza00/testing-with-pokemon/tree/2_testing_squirtle)
