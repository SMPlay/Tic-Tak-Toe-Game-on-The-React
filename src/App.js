import React from 'react';

import TicTacToeField from './containers/TicTacToeField/TicTacToeField';
import QueueField from './containers/QueueField/QueueField';
import InputField from './components/InputField/InputField';

import './App.css';

const  App = () => (
  <div className="app">
    <TicTacToeField/>
    <div className='menu'>
      <QueueField/>
      <InputField/>
    </div>
    
  </div>
)

export default App;
