import { FETCH_REQUESTS_SUCCESS,  FETCH_REQUESTS_FAILURE } from '../actions/hotelActions';

const initialState = { requests: [] };
export default function hotelReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_REQUESTS_SUCCESS: {
            return Object.assign({}, state, {
                requests: action.payload
            });
        }
        case FETCH_REQUESTS_FAILURE: {
            return Object.assign({}, state, {
                requests: []
            });
        }
        default: {
            return state;
        }
    }
}