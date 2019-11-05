import * as actionTypes from '../actions/actionTypes';

const initialState = {
    icon: 'X',
    cellArr: [],
    size: null,
    count: 0,
    win: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOVE_DONE:
            return {
                ...state,
                icon: state.icon === 'X' ? 'O' : 'X',
            };
        case actionTypes.SELECT_NUMBER_OF_CELLS:
            return {
                ...state,
                cellArr: action.payload.cellArr,
                size: action.payload.size
            };
        case actionTypes.UPDATE_CELL_AND_COUNT:
            return {
                ...state,
                cellArr: action.payload.updateCellArr,
                count: action.payload.count
            }
        case actionTypes.WIN:
            return {
                ...state,
                win: true,
            }
        case actionTypes.RESTART:
            return {
                icon: 'X',
                cellArr: [],
                size: null,
                count: 0,
                win: false,
            }
        default:
            return state;
    };
};

export default reducer;