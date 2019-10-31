import React, { Component } from 'react';

import Cell from '../../components/Cell/Cell';
import * as actions from '../../store/actions/actions';

import { connect } from 'react-redux';

import './style.css';

class TicTacToeField extends Component {

    constructor(props){
        super(props)

        this.state = {
            size: Number(this.props.size) ** 2,
            // cell: [
            //     {   id: 0,
            //         content: null,
            //         coordinates: '1.1'
            //     },
            //     {   
            //         id: 1,
            //         content: null,
            //         coordinates: '1.2'
            //     },
            //     {
            //         id: 2,
            //         content: null,
            //         coordinates: '1.3'
            //     },
            //     {
            //         id: 3,
            //         content: null,
            //         coordinates: '2.1'
            //     },
            //     {
            //         id: 4,
            //         content: null,
            //         coordinates: '2.2'
            //     },
            //     {
            //         id: 5,
            //         content: null,
            //         coordinates: '2.3'
            //     },
            //     {
            //         id: 6,
            //         content: null,
            //         coordinates: '3.1'
            //     },
            //     {
            //         id: 7,
            //         content: null,
            //         coordinates: '3.2'
            //     },
            //     {
            //         id: 8,
            //         content: null,
            //         coordinates: '3.3'
            //     },
            // ],
            cell: [],
            count: 0,
            win: false,
        }

        this.handleClickCell = this.handleClickCell.bind(this);
    }
    

    handleClickCell(e){
        const elId = e.target.dataset.id;
        const currentCell = this.state.cell.filter(item => {
            return item.id === Number(elId);
        });

        if (elId !== undefined && currentCell[0].content === null){
            currentCell[0].content = this.props.icon;
            this.setState({
                ...this.state,
                count: this.state.count + 1
            });

            if(this.state.count > 3){
                const win = arr => {
                    const newArr = [];
                    arr.forEach(item => newArr.push(item.content));
                    const symbolStr = newArr.join('');
                    if(symbolStr === 'XXX'){
                        setTimeout(() => {
                            alert('Победа X');
                        }, 300);
                        this.setState({
                            ...this.state,
                            win: true
                        })
                    }else if(symbolStr === 'OOO'){
                        setTimeout(() => {
                            alert('Победа O');
                        }, 300);
                        this.setState({
                            ...this.state,
                            win: true
                        })
                    }
                };

                const rightDiag = [];
                for(let i = 1; i < 4; i++){
                    const strFields = this.state.cell.filter(item => {
                        return item.coordinates.slice(0,1) === `${i}`;
                    });
                    const columnFields = this.state.cell.filter(item => {
                        return item.coordinates.slice(-1) === `${i}`;
                    });
                    
                    this.state.cell.forEach(item => {
                        if(item.coordinates.slice(0,1) === `${i}` && item.coordinates.slice(-1) === `${4 - i}` ){
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
            };
            if(this.state.count === 8 && !this.state.win){
                setTimeout(() => {
                    alert('Ничья!');
                }, 300);
            }

            this.props.moveDone();
        };
    };

    render(){  
        return(
            <div className='tic-tac-toe-field'>
                {this.state.cell.map((item, i) => (
                    <Cell 
                    key={ i } 
                    dataId={ item.id }
                    content={ item.content }
                    onClick={ this.handleClickCell }/>))}
            </div>
        );
    };
};

const mapStateToProps = state => (
    {
        icon: state.icon,
        size: state.size,
    }
);

const mapDispatchToProps = dispatch => (
    {moveDone: () => dispatch(actions.selectCell())}
)

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeField);