import winDetail from './winDetail';

const win = (arr, objForWInFunc) => {
    let newArr = [];
    arr.forEach(item => newArr = [...newArr, item.content]);
    const symbolStr = newArr.join('');
            
    let strX = '';
    let strO = '';
    for(let i = 0; i < objForWInFunc.sizeField; i++){
        strX += 'X';
        strO += 'O';
    }
    
    if(symbolStr === strX){
        winDetail(objForWInFunc.players, arr, 'X', objForWInFunc.winGame)
    }else if(symbolStr === strO){
        winDetail(objForWInFunc.players, arr, 'O', objForWInFunc.winGame)
    };         
};

export default win;