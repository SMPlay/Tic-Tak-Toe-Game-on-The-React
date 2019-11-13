import React from 'react';

import * as styled from '../../styled/style';
import './style.css';

import getColor from './util/getColor';
import getCurrentIcon from './util/getCurrentIcon';

import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

const Cell = props => {

    const handleClick = e => {
        const elId = Number(e.target.dataset.id);
        const currentCell = props.cell.find(item => item.id === elId)
        const updateCellArr = props.cell.map(item => {
            if(item.id === elId){
                return {...item, 
                    content: props.icon,
                    color: getColor(props.icon, props.players)}
            }else{
                return {...item}
            }
        });
        if(!isNaN(elId) && currentCell.content === null){
            props.updateCellAndCount(updateCellArr, props.count + 1);
            props.moveDone();
        };
    };

    return (
        <div 
            className='cell'
            style={ {width: `${props.sizeCell}px`,
                    height: `${props.sizeCell}px`,
                    border: `${styled.borderCell}px solid black`} }
            data-id={props.dataId}
            onClick={!props.win ? e => handleClick(e) : null}>{ getCurrentIcon(props.content, props.sizeCell, 10, 8, props.color) }</div>
    );
};

const mapStateToProps = state => (
    {
        cell: state.reducerMainGame.cellArr,
        count: state.reducerMainGame.count,
        icon: state.reducerMainGame.icon,
        sizeCell: state.reducerMainGame.sizeCell,
        players: state.reducerPlayers.players
    }
);

const mapDispatchToProps = dispatch => (
    {
        updateCellAndCount: (updateCellArr, count) => dispatch(actions.updateCellAndCount(updateCellArr, count)),
        moveDone: () => dispatch(actions.selectCell()) 
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Cell);