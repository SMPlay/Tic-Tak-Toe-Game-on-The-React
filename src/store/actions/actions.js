import * as actionTypes from './actionTypes';

export const selectCell = () => (
    {type: actionTypes.MOVE_DONE}
);

export const selectNumberOfCells =(cellArr, size) => (
    {
        type: actionTypes.SELECT_NUMBER_OF_CELLS,
        payload: {
            cellArr: cellArr,
            size: size
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

export const restartGame = () => (
    {
        type: actionTypes.RESTART,
    }
)