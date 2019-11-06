import * as actionTypes from '../actions/actionTypes';

const initialState = {
    players: [],
};

const reducerPlayer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SELECT_PLAYER:
            return {
                ...state,
                players: [...state.players, action.player]
            };
        
        default:
            return state;
    };
};

export default reducerPlayer;
