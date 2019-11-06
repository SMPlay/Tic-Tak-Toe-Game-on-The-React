import React from 'react';

import { connect } from 'react-redux';

import TicTacToeField from './containers/TicTacToeField/TicTacToeField';
import QueueField from './containers/QueueField/QueueField';
import InputField from './components/InputField/InputField';
import RestartBtn from './components/RestartBtn/RestartBtn';
import InputPlayersName from './components/InputPlayersName/InputPlayersName';
import ResultGameField from './containers/ResultGameField/ResultGameField';

import './App.css';

const App = props => {

  let restartBtn = null;
  let threeComponent = null;
  let resultComponent = null;

  if(props.cellArr.length > 1){
    if(props.win || (props.count === (props.sizeField ** 2) && !props.win)){
      resultComponent = <ResultGameField/>;
      restartBtn = <RestartBtn/>;
    };
  };

  if(props.players.length < 2) {
    threeComponent = <InputPlayersName/>
  }else if(props.cellArr.length === 0){
    threeComponent = <InputField/>;
  }else {
    threeComponent = null;
  }

  return(
    <div className="app">
    { props.cellArr.length !== 0 ? <TicTacToeField/> : null }
      <div className='menu'>
        <QueueField/>
        { threeComponent }
        { resultComponent }
        { restartBtn }
      </div>
    </div>
  );
};

const mapStateToProps = state => (
  {
    count: state.reducerMainGame.count,
    win: state.reducerMainGame.win,
    cellArr: state.reducerMainGame.cellArr,
    sizeField: state.reducerMainGame.sizeField,
    players: state.reducerPlayers.players
  }
);

export default connect(mapStateToProps)(App);
