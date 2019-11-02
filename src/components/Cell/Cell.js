import React from 'react';

import Cross from '../Cross/Cross';
import Zero from '../Zero/Zero';
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

        if(elId !== undefined && currentCell.content === null){
            props.updateCellAndCount(updateCellArr, props.count + 1);
            props.moveDone();
        }
    }

    let content = '';
    if (props.content === 'X'){
        content = <Cross/>;
    }else if(props.content === 'O'){
        content = <Zero/>;
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

const mapStateToProps =( { cellArr, count, icon } ) => (
    {
        cell: cellArr,
        count: count,
        icon: icon
    }
);

const mapDispatchToProps = dispatch => (
    {
        updateCellAndCount: (updateCellArr, count) => dispatch(actions.updateCellAndCount(updateCellArr, count)),
        moveDone: () => dispatch(actions.selectCell()) 
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Cell);