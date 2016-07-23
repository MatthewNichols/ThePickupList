import { combineReducers } from 'redux';
import ListsReducer from './lists-reducer'

const rootReducer = combineReducers({
    lists: ListsReducer
});

export default rootReducer;