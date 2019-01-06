import { combineReducers } from 'redux';
import accountReducer from '../state/reducers/accountReducers';
import hotelReducer from '../state/reducers/hotelReducers';

const rootReducer = combineReducers({
    hotel: accountReducer,
    actions: hotelReducer,
});

export default rootReducer;