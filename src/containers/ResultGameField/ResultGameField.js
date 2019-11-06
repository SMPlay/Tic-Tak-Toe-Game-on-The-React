import React from 'react';

import { connect } from 'react-redux';

import './style.css';

const ResultGameField = props => {
    let resultText = '';
    let winCount = null;
    if(props.win){
        let leaderObj = props.players.find(item => item.name === props.leader);
        resultText = `Победил ${props.leader}`;
        winCount = `Количество побед: ${ leaderObj.winCount }`;
    }else {
        resultText = 'Ничья!';
        winCount = '';
    }

    return(
        <div className='result-field'>
            <h2>{ resultText }</h2>
            <h3>{ winCount }</h3>
        </div>
    );
};

const mapStateToProps = state => ({
    win: state.reducerMainGame.win,
    leader: state.reducerMainGame.leader,
    players: state.reducerPlayers.players
});

export default connect(mapStateToProps)(ResultGameField);