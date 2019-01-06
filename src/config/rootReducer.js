import { combineReducers } from 'redux';
import accountReducer from '../state/reducers/accountReducers';

const rootReducer = combineReducers({
    hotel: accountReducer,
});

export default rootReducer;