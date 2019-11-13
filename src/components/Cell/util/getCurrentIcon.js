import React from 'react';
import Figure from '../../Figure/Figure';

import getSizeIcon from './getSizeIcon';

const getCurrentIcon = (icon, sizeCell, sizeForX, sizeForO, color) => {
    let content = '';
    if (icon === 'X'){
        return content = <Figure 
                        figureName={ "fas fa-times" } 
                        fontSize={ getSizeIcon(sizeForX, sizeCell) }
                        color={ color }/>;
    }else if(icon === 'O'){
        return content = <Figure 
                        figureName={ "far fa-circle" }
                        fontSize={ getSizeIcon(sizeForO, sizeCell) }
                        color={ color }/>;
    }else{
        return content = '';
    };
};

export default getCurrentIcon;