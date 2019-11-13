import win from './win';

const createWinArr = (sizeField, cellArr, players, winGame) => {
    let rightDiag = [];
    const objForWInFunc = {
        players: players,
        sizeField: sizeField,
        winGame: winGame
    }
    for(let i = 1; i < sizeField + 1; i++){
        const strFields = cellArr.filter(item => {
            return item.coordinates.slice(0, 1) === `${i}`;
        });
        const columnFields = cellArr.filter(item => {
            return item.coordinates.slice(-1) === `${i}`;
        });

        cellArr.forEach(item => {
            if(item.coordinates.slice(0, 1) === `${i}` && item.coordinates.slice(-1) === `${sizeField + 1 - i}`){
                rightDiag.push(item);
            };   
        });
        win(strFields, objForWInFunc);
        win(columnFields, objForWInFunc)
    };

    const leftDiag = cellArr.filter(item => {
        return item.coordinates.slice(0,1) === item.coordinates.slice(-1);
    });
    win(leftDiag,objForWInFunc);
    win(rightDiag, objForWInFunc);
};

export default createWinArr;