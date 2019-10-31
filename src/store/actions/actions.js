import * as actionTypes from './actionTypes';

export const selectCell = () => (
    {
        type: actionTypes.MOVE_DONE
    }
)

export const selectSize = size => (
    {
        type: actionTypes.SELECT_SIZE,
        size: size
    }
)