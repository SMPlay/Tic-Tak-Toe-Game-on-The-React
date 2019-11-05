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
        let size = Number(this.state.value);
        if (size > 1){
            
            let cellArr = [];
            for (let i = 0; i < Number(this.state.value); i++){
                let firstCoord = `${i + 1}`;
                for (let j = 0; j < Number(this.state.value); j++){
                    let twoCoord = `${j + 1}`;
                    let cellObj = {
                        color: 'black',
                        content: null,
                        coordinates: `${firstCoord}.${twoCoord}`,
                    };
                    cellArr = [...cellArr, cellObj];
                };
            };
            cellArr = cellArr.map((item, i) => {
                return {...item, id: i};
            });
            this.props.selectNumberOfCells(cellArr, Number(this.state.value));

            this.setState({
                value: ''
            });
        }else {
            alert('Введите число больше 1!');
        }
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
                <input type='number' value={ this.state.value } onChange={ this.handleChange }/>
                <button onClick={ this.handleSelect }>Select!</button>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => (
    {
        selectNumberOfCells: (cellArr, size) => dispatch(actions.selectNumberOfCells(cellArr, size))
    }
)

export default connect(null, mapDispatchToProps)(InputField);