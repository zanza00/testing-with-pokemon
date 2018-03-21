import React, { PureComponent } from 'react';
import './Loader.css';

class Loader extends PureComponent {
    render() {
        return (
            <div className="loader-wrapper">
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube" />
                    <div className="sk-cube2 sk-cube" />
                    <div className="sk-cube4 sk-cube" />
                    <div className="sk-cube3 sk-cube" />
                </div>
            </div>
        );
    }
}

export default Loader;
