import fetch from 'isomorphic-fetch';
require('dotenv').config();

const baseEndpoint = process.env.REACT_APP_ENDPOINT;
export const FETCH_REQUESTS_SUCCESS = "FETCH_REQUESTS_SUCCESS";
export const FETCH_REQUESTS_FAILURE = "FETCH_REQUESTS_FAILURE";

export const fetchRequestsForHotel = (hotelId) => {
    return (dispatch) => {
        return fetchRequestsAPI(hotelId).then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchRequestsSuccess(json));
            } else {
                dispatch(fetchRequestsFailure());
            }
        });
    }
}

const fetchRequestsSuccess = (payload) => {
    return {
        type: FETCH_REQUESTS_SUCCESS,
        payload
    };
}

const fetchRequestsFailure = ()  => {
    return {
        type: FETCH_REQUESTS_FAILURE
    };
}

const fetchRequestsAPI = (hotelId) => {
    const URL = `${baseEndpoint}/account/requests`;
    return fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            hotelId: hotelId,
        })
    })
    .then(response => Promise.all([response, response.json()]))
};