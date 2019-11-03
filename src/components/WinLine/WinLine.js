import React from 'react';

const WinLine = props => {
    let customStyle = {
        position: 'absolute',
        width: `${props.width}px`,
        height: `${props.height}px`, 
        transform: `rotate(${props.rotate}deg)`,
        left: `${props.left}px`,
        top: `${props.top}px`,
        backgroundColor: 'black'
    };
    return(
        <div style={ customStyle }></div>
    );
    
};

export default WinLine;