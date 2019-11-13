import React, { Component } from 'react';

import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';
import * as actions from '../../store/actions/actions';

import getPlayerObj from './util/getPlayerObj';
import CurentPlayerComponent from './util/CurentPlayerComponent';

import './style.css';

class InputPlayersName extends Component {

    constructor(props){
        super(props);

        this.state = {
            value: '',
            background: '#fff',
            colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
    };
    
    handleSubmit(e){
        e.preventDefault();
        
        if(this.state.value !== '') {
            getPlayerObj(
                this.state.value,
                this.props.moveDone, 
                this.props.selectPlayer,
                this.props.errFunc,
                this.props.players,
                this.state.background,
                this.props.currentIcon)

            this.setState({
                ...this.state,
                value: '',
                background: '#fff',
            });
        }else{
            this.props.errFunc(true);
        }
    };

    handleChange(e){
        this.setState({
            ...this.state,
            value: e.target.value
        });
    };

    handleChangeColor(color){
        this.setState({ background: color.hex });
    };

    render(){
        let classNameForInput = `players-form__input ${this.props.err ? 'errors' : ''}`
        return(
            <form className='players-form' onSubmit={ this.handleSubmit }>
                <label>
                    <h3>Выберите имя игрока и цвет { CurentPlayerComponent(this.props.currentIcon) }</h3>
                    <input 
                        className={ classNameForInput }
                        placeholder='Enter name...' 
                        type='text' 
                        value={ this.state.value } 
                        onChange={ this.handleChange }/>
                </label>
                <CirclePicker
                    color={ this.state.background }
                    colors={ this.state.colors }
                    onChangeComplete={ this.handleChangeColor }/>
                <button className='players-form__btn' type='submit'>Выбрать!</button>
            </form>
        );
    };
};

const mapStateToProps = state => (
    {   
        players: state.reducerPlayers.players,
        currentIcon: state.reducerMainGame.icon,
        err: state.reducerPlayers.err
    }
);

const mapDispatchToProps = dispatch => (
    {
        errFunc: err => dispatch(actions.err(err)),
        selectPlayer: player => dispatch(actions.selectPlayer(player)),
        moveDone: () => dispatch(actions.selectCell()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(InputPlayersName);