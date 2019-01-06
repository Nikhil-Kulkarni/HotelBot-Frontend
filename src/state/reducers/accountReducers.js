import { LOGIN_HOTEL_SUCCESS, LOGIN_HOTEL_FAILURE } from '../actions/accountActions';

const initialState = { done: false };
export default function accountReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_HOTEL_SUCCESS: {
            return Object.assign({}, state, {
                success: true,
                done: true,
                info: action.payload
            });
        }
        case LOGIN_HOTEL_FAILURE: {
            return Object.assign({}, state, {
                success: false,
                done: true,
                message: action.payload,
                info: {}
            });
        }
        default: {
            return state;
        }
    }
}