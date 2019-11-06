import React, { Component } from 'react';

import Cell from '../../components/Cell/Cell';
import * as actions from '../../store/actions/actions';

import { connect } from 'react-redux';

import './style.css';

class TicTacToeField extends Component {

    componentDidUpdate(){
        if(!this.props.win){
            if(this.props.count > this.props.sizeField){
                const winDetail = (leaderArr, leaderIcon) => {
                    leaderArr = leaderArr.map(item => item.color = 'green');
                    let leader = this.props.players.find(item => item.playerIcon === leaderIcon);
                    leader.winCount += 1;
                    this.props.winGame(leader.name);
                };

                const win = arr => {
                    let newArr = [];
                    arr.forEach(item => newArr = [...newArr, item.content]);
                    const symbolStr = newArr.join('');
                            
                    let strX = '';
                    let strO = '';
                    for(let i = 0; i < this.props.sizeField; i++){
                        strX += 'X';
                        strO += 'O';
                    }
                    
                    if(symbolStr === strX){
                        winDetail(arr, 'X');
                    }else if(symbolStr === strO){
                        winDetail(arr, 'O');
                    };         
                };
            
                let rightDiag = [];
                for(let i = 1; i < this.props.sizeField + 1; i++){
                    const strFields = this.props.cellArr.filter(item => {
                        return item.coordinates.slice(0, 1) === `${i}`;
                    });
                    const columnFields = this.props.cellArr.filter(item => {
                        return item.coordinates.slice(-1) === `${i}`;
                    });

                    this.props.cellArr.forEach(item => {
                        if(item.coordinates.slice(0, 1) === `${i}` && item.coordinates.slice(-1) === `${this.props.sizeField + 1 - i}`){
                            rightDiag.push(item);
                        };   
                    });
                    win(strFields);
                    win(columnFields);
                };
            
                const leftDiag = this.props.cellArr.filter(item => {
                    return item.coordinates.slice(0,1) === item.coordinates.slice(-1);
                });
                win(leftDiag);
                win(rightDiag);
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
    {
        moveDone: () => dispatch(actions.selectCell()),
        restartGame: () => dispatch(actions.restartGame()),
        winGame: leader => dispatch(actions.win(leader)),

    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeField);