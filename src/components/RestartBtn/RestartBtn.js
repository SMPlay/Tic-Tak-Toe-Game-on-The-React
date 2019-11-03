import React from 'react';

import './style.css';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';


const RestartBtn = props => {
    return(
        <div>
            <button onClick={ props.restartGame }>Restart Game</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => (
    {restartGame: () => dispatch(actions.restartGame())}
);

export default connect(null, mapDispatchToProps)(RestartBtn);