import React from 'react';

import Figure from '../../Figure/Figure';

const CurentPlayerComponent = currentIcon => {
    if(currentIcon === 'X'){
        return  <Figure
                    figureName={ 'fas fa-times' }
                    fontSize={ 1.2 }/>
    }else {
        return <Figure
                    figureName={ 'far fa-circle' }
                    fontSize={ 1.1 }/>
    };
};

export default CurentPlayerComponent;