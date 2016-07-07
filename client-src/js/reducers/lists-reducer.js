
import { FETCH_LISTS } from '../actions';

const INITIAL_STATE = { lists: null };

export default function (state = INITIAL_STATE, action) {
    //console.log("lists reducer ", action);
    switch (action.type) {
        case FETCH_LISTS:
            console.log('actions', action.payload.data);
            return { ...state, lists: action.payload.data };

        default:
            return state;
    }
}