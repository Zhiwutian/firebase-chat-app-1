import types from '../actions/types';

const DEFAULT_STATE = {
    log: {},
    name: '',
    rooms: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SET_ROOM:
            return {...state, name: action.payload};
        case types.UPDATE_ROOMS:
            return {...state, rooms: action.payload};
        case types.UPDATE_CHAT_LOG:
            return {...state, log: action.chatLog};
        case types.CLEAR_CHAT_DATA:
            return {log: {}, name: '', rooms: {}};
        default:
            return state;
    }
} 
