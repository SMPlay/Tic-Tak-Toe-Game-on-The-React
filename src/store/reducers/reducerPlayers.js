import * as actionTypes from '../actions/actionTypes';

const initialState = {
    err: false,
    players: [],
};

const reducerPlayer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SELECT_PLAYER:
            return {
                ...state,
                players: [...state.players, action.payload.player]
            };
        case actionTypes.ERR:
            return {
                ...state,
                err: action.err
            }
        default:
            return state;
    };
};

export default reducerPlayer;
