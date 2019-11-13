import * as actionTypes from './actionTypes';

export const selectCell = () => (
    {type: actionTypes.MOVE_DONE}
);

export const selectNumberOfCells = (cellArr, sizeField, sizeCell) => (
    {
        type: actionTypes.SELECT_NUMBER_OF_CELLS,
        payload: {
            cellArr: cellArr,
            sizeField: sizeField,
            sizeCell: sizeCell
        }
    }
);

export const updateCellAndCount = (updateCellArr, count) => (
    {
        type: actionTypes.UPDATE_CELL_AND_COUNT,
        payload: {
            updateCellArr: updateCellArr,
            count: count
        }
    }
)

export const win = leader => (
    {
        type: actionTypes.WIN,
        leader: leader
    }
)

export const restartGame = () => (
    {type: actionTypes.RESTART,}
);

export const err = err => (
    {
        type: actionTypes.ERR,
        err: err
    }
)

export const selectPlayer = player => (
    {
        type: actionTypes.SELECT_PLAYER,
        payload: {
            player: player,
        }
    }
);