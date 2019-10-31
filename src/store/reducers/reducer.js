import * as actionTypes from '../actions/actionTypes';

const initialState = {
    icon: 'X',
    size: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOVE_DONE:
            return {
                ...state,
                icon: state.icon === 'X' ? 'O' : 'X',
            };
        case actionTypes.SELECT_SIZE:
            return {
                ...state,
                size: action.size,
            };
        default:
            return state;
    };
};

export default reducer;