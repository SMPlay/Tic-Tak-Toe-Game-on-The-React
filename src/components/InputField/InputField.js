import React, { Component } from 'react';

import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

import './style.css';

class InputField extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect(){
        this.props.selectSize(this.state.value);
    }

    handleChange(e){
        this.setState({
            value: e.target.value,
        });
    }

    render(){
        return(
            <div className='input-field'>
                <h3>Выберите площадь:</h3>
                <input value={ this.state.value } onChange={ this.handleChange }/>
                <button onClick={ this.handleSelect }>Select!</button>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => (
    {
        selectSize: valueSize => dispatch(actions.selectSize(valueSize))
    }
)

export default connect(null, mapDispatchToProps)(InputField);