const getPlayerObj = (value, moveDone, selectPlayer, errFunc, players, color, icon) => {
    let player = {
        playerIcon: null,
        winCount: null,
        color: '',
        name: ''
    };
    if(players.length === 0 || !players.find(item => item.name === value)){
        player.name = value;
        player.playerIcon = icon;
        player.color = color;

        return (
            errFunc(false),
            moveDone(),
            selectPlayer(player)
        );
    }else{
        return errFunc(true);
    };
};

export default getPlayerObj;