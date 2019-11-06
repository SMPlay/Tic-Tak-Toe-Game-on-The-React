import React from 'react';

import Figure from '../Figure/Figure';
import * as styled from '../../styled/style';
import './style.css';

import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

const Cell = props => {

    const handleClick = e => {
        const elId = Number(e.target.dataset.id);
        const currentCell = props.cell.find(item => item.id === elId)
        const updateCellArr = props.cell.map(item => {
            if(item.id === elId){
                return {...item, content: props.icon}
            }else{
                return {...item}
            }
        });
        if(!isNaN(elId) && currentCell.content === null){
            props.updateCellAndCount(updateCellArr, props.count + 1);
            props.moveDone();
        };
    };

    const getSizeIcon = sizeIcon => {
        let fontSize = props.sizeCell * sizeIcon / styled.defaultCellSize;
        return fontSize;
    } 

    let content = '';
    if (props.content === 'X'){
        content = <Figure 
                        figureName={ "fas fa-times" } 
                        fontSize={ getSizeIcon(10) }
                        color={ props.color }/>;
    }else if(props.content === 'O'){
        content = <Figure 
                        figureName={ "far fa-circle" }
                        fontSize={ getSizeIcon(8) }
                        color={ props.color }/>;
    }else{
        content = '';
    };

    return (
        <div 
            className='cell'
            style={ {width: `${props.sizeCell}px`,
                    height: `${props.sizeCell}px`,
                    border: `${styled.borderCell}px solid black`} }
            data-id={props.dataId}
            onClick={!props.win ? e => handleClick(e) : null}>{ content }</div>
    );
};

const mapStateToProps = state => (
    {
        cell: state.cellArr,
        count: state.count,
        icon: state.icon,
        sizeCell: state.sizeCell,
    }
);

const mapDispatchToProps = dispatch => (
    {
        updateCellAndCount: (updateCellArr, count) => dispatch(actions.updateCellAndCount(updateCellArr, count)),
        moveDone: () => dispatch(actions.selectCell()) 
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Cell);