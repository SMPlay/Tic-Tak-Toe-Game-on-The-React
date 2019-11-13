const getColor = (player, playersArr) => {
    let currentPlayerObj = playersArr.find(item => item.playerIcon === player)
    let currentColor = currentPlayerObj.color;

    if(currentColor === ''){
        return 'black';
    }else{
        return currentColor;
    };
};

export default getColor;