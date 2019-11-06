import React, { Component } from 'react';

import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

import './style.css';
import * as styled from '../../styled/style';

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
            let sizeCell = null;
            const clientWidth = document.documentElement.clientWidth;
            if (size > 20){
                alert('Введите число меньше 20!');            
            }else if(size <= 2){
                alert('Введите число больше 2!');
            }else {
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
                if(clientWidth < (size ** 2 + styled.borderCell * size) * this.props.sizeCell){
                    sizeCell = clientWidth / (size + styled.borderCell * size);
                    this.props.selectNumberOfCells(cellArr, Number(this.state.value), Number(sizeCell));
                }else{
                    this.props.selectNumberOfCells(cellArr, Number(this.state.value), this.props.sizeCell);
                }

                this.setState({
                    value: ''
                });
            };
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