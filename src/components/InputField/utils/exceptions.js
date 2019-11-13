import createObj from './createObj';

const exceptions = (size, sizeCell, clientWidth, selectNumberOfCells) => {
    if (size > 20){
        alert('Введите число меньше 20!');            
    }else if(size <= 2){
        alert('Введите число больше 2!');
    }else {
        createObj(size, 
            sizeCell, 
            clientWidth,
            selectNumberOfCells)
    };
};

export default exceptions;