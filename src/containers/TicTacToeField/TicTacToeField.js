import React, { Component } from 'react';

import Cell from '../../components/Cell/Cell';
import * as actions from '../../store/actions/actions';

import createWinArr from './utils/createWinArr';

import { connect } from 'react-redux';

import './style.css';

class TicTacToeField extends Component {

    componentDidUpdate(){
        if(!this.props.win){
            if(this.props.count > this.props.sizeField){
                createWinArr(this.props.sizeField,
                    this.props.cellArr,
                    this.props.players,
                    this.props.winGame);
            };
        };
    };

    render(){
        if(this.props.cellArr !== null){
            return(
                <div 
                    className='tic-tac-toe-field' 
                    style={ {width: `${this.props.sizeField * (this.props.sizeCell + 4)}px`} }>
                    {this.props.cellArr.map((item, i) => (
                        <Cell 
                            key={ i }
                            color={ item.color }
                            win={ this.props.win }
                            dataId={ item.id }
                            content={ item.content }
                        />))}
                </div>
            );
        } else{
            return(
                <div></div>
            );
        };
    };  
};

const mapStateToProps = state => (
    {
        icon: state.reducerMainGame.icon,
        cellArr: state.reducerMainGame.cellArr,
        sizeField: state.reducerMainGame.sizeField,
        sizeCell: state.reducerMainGame.sizeCell,
        count: state.reducerMainGame.count,
        win: state.reducerMainGame.win,
        players: state.reducerPlayers.players
    }
);

const mapDispatchToProps = dispatch => (
    {winGame: leader => dispatch(actions.win(leader)),}
);

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeField);