import { combineReducers } from 'redux';
import ListsReducers from './lists-reducer'

const rootReducer = combineReducers({
    lists: ListsReducers
});

export default rootReducer;