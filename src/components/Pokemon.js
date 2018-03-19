import React, { PureComponent } from 'react';
import './Pokemon.css';

function calculateClassNames(types) {
    return types.join('-');
}

class Pokemon extends PureComponent {
    render() {
        const { image, name, types } = this.props;
        return (
            <div className={`pokemon ${calculateClassNames(types)}`}>
                <img alt={name} src={image} width="192px" />
                <div>{name}</div>
            </div>
        );
    }
}

export default Pokemon;
