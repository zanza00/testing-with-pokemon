import React from "react";
import ReactDOM from "react-dom";

import App, { parseResponse } from "./App";
import squirtle from "./mock/squirtle";
import bulbasaur from "./mock/bulbasaur";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe("Response Parse", () => {
    it("can parse the response for squirtle", () => {
        const response = squirtle;

        // Same object that we had before
        const expected = {
            id: 7,
            name: "Squirtle",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            types: ["water"]
        };

        const result = parseResponse(response);

        expect(result).toEqual(expected);
    });
    it("can parse the response for bulbbasaur", () => {
        const response = bulbasaur;

        // Same object that we had before
        const expected = {
            id: 1,
            name: "Bulbasaur",
            image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            types: ["grass", "poison"]
        };

        const result = parseResponse(response);

        expect(result).toEqual(expected);
    });
});
