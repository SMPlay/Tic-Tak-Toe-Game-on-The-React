import React from 'react';

const Figure = props => (
    <div>
        <i 
        className={ props.figureName }
        style={ {fontSize: `${props.fontSize}em`, color: props.color} }></i>
    </div>
);

export default Figure;