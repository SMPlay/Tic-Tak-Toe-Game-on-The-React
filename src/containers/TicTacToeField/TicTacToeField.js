import React, { Component } from 'react';

import Cell from '../../components/Cell/Cell';
import * as actions from '../../store/actions/actions';

import { connect } from 'react-redux';

import './style.css';

class TicTacToeField extends Component {

    constructor(props){
        super(props)

        this.state = {
            cell: this.props.cellArr,
            count: this.props.count,
            win: false,
        };
    };

    componentDidUpdate(){
        if(this.state.cell === null){
            this.setState({
                cell: this.props.cellArr
            });
        }else{

            setTimeout(() => {
                if(this.state.cell.some(item => item.content === null)){
                    this.setState({
                        cell: this.props.cellArr,
                        count: this.props.count
                    });
                };

                if(!this.state.win){
                    if (this.state.count > this.props.size){

                        const winDetail = leader => {
                            setTimeout(() => {
                                alert(`Победа ${leader}`);
                            }, 300);
                            this.setState({
                                ...this.state,
                                win: true
                            });
                            this.props.restartGame();
                        }

                        const win = arr => {
                            let newArr = [];
                            arr.forEach(item => newArr = [...newArr, item.content]);
                            const symbolStr = newArr.join('');
                            
                            let strX = '';
                            let strO = '';
                            for(let i = 0; i < this.props.size; i++){
                                strX += 'X';
                                strO += 'O';
                            }
                            
                            if(symbolStr === strX){
                                winDetail('X');
                            }else if(symbolStr === strO){
                                winDetail('O');
                            };
                            
                        };
            
                        let rightDiag = [];
                        for(let i = 1; i < this.props.size + 1; i++){
                            const strFields = this.state.cell.filter(item => {
                                return item.coordinates.slice(0,1) === `${i}`;
                            });
                            const columnFields = this.state.cell.filter(item => {
                                return item.coordinates.slice(-1) === `${i}`;
                            });
                            
                            this.state.cell.forEach(item => {
                                if(item.coordinates.slice(0,1) === `${i}` && item.coordinates.slice(-1) === `${4 - i}`){
                                    rightDiag.push(item);
                                };   
                            });
                            win(strFields);
                            win(columnFields);
                        };
            
                        const leftDiag = this.state.cell.filter(item => {
                            return item.coordinates.slice(0,1) === item.coordinates.slice(-1);
                        });
                        win(leftDiag);
                        win(rightDiag);
                    }
                    
                }else if(this.state.count === (this.props.size ** 2)){
                    setTimeout(() => {
                        alert('Ничья!');
                    }, 300);
                    
                };
            },300);
        }
        if(this.state.count === (this.props.size ** 2) && !this.state.win){
            setTimeout(() => {
                alert('Ничья!');
            }, 300);
        };
    }

    render(){
        if(this.state.cell !== null){
            const sizeField = this.props.size;
            return(
                <div 
                    className='tic-tac-toe-field' 
                    style={ {width: `${150 * sizeField + sizeField * 4}px`} }>
                    {this.state.cell.map((item, i) => (
                        <Cell 
                        key={ i } 
                        win={ this.state.win }
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
        icon: state.icon,
        cellArr: state.cellArr,
        size: state.size,
        count: state.count
    }
);

const mapDispatchToProps = dispatch => (
    {
        moveDone: () => dispatch(actions.selectCell()),
        restartGame: () => dispatch(actions.restartGame()),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeField);