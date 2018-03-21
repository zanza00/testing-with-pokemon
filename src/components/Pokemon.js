import React, { PureComponent } from 'react';
import './Pokemon.css';

function calculateClassNames(types = ['none']) {
    return types.join('-');
}

class Pokemon extends PureComponent {
    render() {
        const { image, name, types } = this.props;
        return (
            <div className={`pokemon ${calculateClassNames(types)}`}>
                <div className="inner-card">
                    {image && <img alt={name} src={image} width="192px" />}
                    <div>{name}</div>
                </div>
            </div>
        );
    }
}

export default Pokemon;
