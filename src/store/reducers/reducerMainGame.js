import * as actionTypes from '../actions/actionTypes';
import * as styled from '../../styled/style';

const initialState = {
    icon: 'X',
    cellArr: [],
    sizeField: null,
    sizeCell: styled.defaultCellSize,
    count: 0,
    leader: null,
    win: false,
};

const reducerMainGame = (state = initialState, action) => {
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
                sizeField: action.payload.sizeField,
                sizeCell: action.payload.sizeCell
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
                leader: action.leader,
                win: true,
            }
        case actionTypes.RESTART:
            return {
                icon: 'X',
                cellArr: [],
                sizeField: null,
                sizeCell: styled.defaultCellSize,
                count: 0,
                leader: null,
                win: false,
            }
        default:
            return state;
    };
};

export default reducerMainGame;