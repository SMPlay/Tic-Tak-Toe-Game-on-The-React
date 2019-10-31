import React from 'react';

import Cross from '../Cross/Cross';
import Zero from '../Zero/Zero';
import './style.css';

const Cell = props => {
    let content = '';
    if (props.content === 'X'){
        content = <Cross/>
    }else if(props.content === 'O'){
        content = <Zero/>
    }else{
        content = ''
    };

    return (
        <div 
        className='cell' 
        key={props.key}
        data-id={props.dataId}
        onClick={props.onClick}>{content}</div>
    );
};

export default Cell;