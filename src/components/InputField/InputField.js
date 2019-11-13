import React, { Component } from 'react';

import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

import exceptions from './utils/exceptions';

import './style.css';
class InputField extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    };
    
    handleSelect(e){
        if(e.key === 'Enter' || e.type === 'click'){
            let size = Number(this.state.value);
            const clientWidth = document.documentElement.clientWidth;
            exceptions(size, 
                this.props.sizeCell, 
                clientWidth,
                this.props.selectNumberOfCells);
        };
    };

    handleChange(e){
        let value = e.target.value;
        this.setState({
            value: value
        });
    };

    render(){
        return(
            <div className='input-field'>
                <h3>Выберите размер поля:</h3>
                <div className='content'>
                    <input 
                        className='input-field__input'
                        placeholder='Enter size...' 
                        type='number' 
                        value={ this.state.value } 
                        onChange={ this.handleChange }
                        onKeyPress={ this.handleSelect }/>
                    <button 
                    className='input-field__btn' 
                    onClick={ this.handleSelect }
                    >Select!</button>
                </div>
            </div>
        );
    };
};


const mapStateToProps = state => (
    {sizeCell: state.reducerMainGame.sizeCell}
)

const mapDispatchToProps = dispatch => (
    {selectNumberOfCells: (cellArr, sizeField, sizeCell) => dispatch(actions.selectNumberOfCells(cellArr, sizeField, sizeCell))}
)

export default connect(mapStateToProps, mapDispatchToProps)(InputField);