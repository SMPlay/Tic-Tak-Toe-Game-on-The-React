import React from 'react';

import { connect } from 'react-redux';

import TicTacToeField from './containers/TicTacToeField/TicTacToeField';
import QueueField from './containers/QueueField/QueueField';
import InputField from './components/InputField/InputField';
import RestartBtn from './components/RestartBtn/RestartBtn';

import './App.css';

const App = props => {
  if(props.cellArr.length > 1){
    if(props.win || (props.count === (props.size ** 2) && !props.win)){
      var restartBtn = <RestartBtn/>;
    };
  };
  return(
    <div className="app">
      <TicTacToeField/>
      <div className='menu'>
        <QueueField/>
        { props.cellArr.length === 0 ? <InputField/> : null }
        { restartBtn }
      </div>
    </div>
  )
}

const mapStateToProps = state => (
  {
    count: state.count,
    win: state.win,
    cellArr: state.cellArr,
    size: state.size
  }
);

export default connect(mapStateToProps)(App);
