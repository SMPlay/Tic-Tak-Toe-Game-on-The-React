import React from 'react';

import Figure from '../Figure/Figure';
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

    let content = '';
    if (props.content === 'X'){
        content = <Figure 
                        figureName={ "fas fa-times" } 
                        fontSize={ 10 }
                        color={ props.color }/>;
    }else if(props.content === 'O'){
        content = <Figure 
                        figureName={ "far fa-circle" }
                        fontSize={ 8 }
                        color={ props.color }/>;
    }else{
        content = '';
    };

    return (
        <div 
            className='cell'
            data-id={props.dataId}
            onClick={!props.win ? e => handleClick(e) : null}>{content}</div>
    );
};

const mapStateToProps =( { cellArr, count, icon, leader } ) => (
    {
        cell: cellArr,
        count: count,
        icon: icon,
        leader: leader
    }
);

const mapDispatchToProps = dispatch => (
    {
        updateCellAndCount: (updateCellArr, count) => dispatch(actions.updateCellAndCount(updateCellArr, count)),
        moveDone: () => dispatch(actions.selectCell()) 
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Cell);