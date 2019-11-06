import React from 'react';

import { connect } from 'react-redux';

import TicTacToeField from './containers/TicTacToeField/TicTacToeField';
import QueueField from './containers/QueueField/QueueField';
import InputField from './components/InputField/InputField';
import RestartBtn from './components/RestartBtn/RestartBtn';

import './App.css';

const App = props => {
  let restartBtn = null;
  if(props.cellArr.length > 1){
    if(props.win || (props.count === (props.sizeField ** 2) && !props.win)){
      restartBtn = <RestartBtn/>;
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
    sizeField: state.sizeField
  }
);

export default connect(mapStateToProps)(App);
