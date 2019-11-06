import React, { Component } from 'react';

import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

import Figure from '../Figure/Figure';

import './style.css';

class InputPlayersName extends Component {

    constructor(props){
        super(props);

        this.state = {
            idPlayer: 0,
            currentPlayer: 'X',
            value: '',
            err: false,
            players: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleSubmit(e){
        e.preventDefault();

        if(this.state.value !== '') {
            let player = {
                idPlayer: null,
                playerIcon: null,
                winCount: null,
                name: ''
            };

            if(this.state.players.length === 0 || !this.state.players.find(item => item.name === this.state.value)){
                player.idPlayer = this.state.idPlayer;
                player.name = this.state.value;
                player.playerIcon = this.state.currentPlayer;
        
                this.props.selectPlayer(player);
                this.setState({
                    idPlayer: this.state.idPlayer + 1,
                    currentPlayer: 'O',
                    value: '',
                    err: false,
                    players: [...this.state.players, player],
                });
            }else {
                this.setState({
                    err: true
                })
            }
        }else{
            this.setState({
                err: true
            })
        }
    };

    handleChange(e){
        this.setState({
            ...this.state,
            value: e.target.value
        });
    };

    render(){
        let currentPlayerComponent = null;
        if(this.state.currentPlayer === 'X'){
            currentPlayerComponent = <Figure
                                        figureName={ 'fas fa-times' }
                                        fontSize={ 1.2 }/>
        }else {
            currentPlayerComponent = <Figure
                                        figureName={ 'far fa-circle' }
                                        fontSize={ 1.1 }/>
        }
        let classNameForInput = `players-form__input ${!this.state.err ? null : 'errors'}`
        return(
            <form className='players-form' onSubmit={ this.handleSubmit }>
                <label>
                    <h3>Выберите имя игрока { currentPlayerComponent }</h3>
                    <input 
                        className={ classNameForInput }
                        placeholder='Enter name...' 
                        type='text' 
                        value={ this.state.value } 
                        onChange={ this.handleChange }/>
                </label>
                <button className='players-form__btn' type='submit'>Выбрать!</button>
            </form>
        );
    };
};

const mapDispatchToProps = dispatch => (
    {selectPlayer: player => dispatch(actions.selectPlayer(player))}
);

export default connect(null, mapDispatchToProps)(InputPlayersName);