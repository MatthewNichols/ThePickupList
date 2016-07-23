import { combineReducers } from 'redux';
import { routerMiddleware, push, syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ListsReducer from './lists-reducer'

const rootReducer = combineReducers({
    lists: ListsReducer,
    routing: routerReducer
});

console.log(rootReducer);

export default rootReducer;