const winDetail = (players, leaderArr, leaderIcon, winGame) => {
    leaderArr = leaderArr.map(item => item.color = 'green');
    let leader = players.find(item => item.playerIcon === leaderIcon);
    leader.winCount += 1;
    winGame(leader.name);
};

export default winDetail;