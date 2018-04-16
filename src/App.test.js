import React from 'react';
import ReactDOM from 'react-dom';

import squirtle from './response/squirtle'
import charmender from './response/charmender'
import bulbasaur from './response/bulbasaur'

import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
