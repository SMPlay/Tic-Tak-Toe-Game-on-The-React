import * as styled from '../../../styled/style';

const createObj = (size, sizeCell, clientWidth, selectNumberOfCells) => {
    let cellArr = [];

    for (let i = 0; i < size; i++){
        let firstCoord = `${i + 1}`;
        for (let j = 0; j < size; j++){
            let twoCoord = `${j + 1}`;
            let cellObj = {
                color: '',
                content: null,
                coordinates: `${firstCoord}.${twoCoord}`,
            };
            cellArr = [...cellArr, cellObj];
        };
    };

    cellArr = cellArr.map((item, i) => {
        return {...item, id: i};
    });
    if(clientWidth < (size ** 2 + styled.borderCell * size) * sizeCell){
        sizeCell = clientWidth / (size + styled.borderCell * size);
        selectNumberOfCells(cellArr, size, Number(sizeCell));
    }else{
        selectNumberOfCells(cellArr, size, sizeCell);
    }
};

export default createObj;