import fetch from 'isomorphic-fetch';
require('dotenv').config();

const baseEndpoint = process.env.REACT_APP_ENDPOINT;

export const LOGIN_HOTEL = "LOGIN_HOTEL";
export const LOGIN_HOTEL_SUCCESS = "LOGIN_HOTEL_SUCCESS";
export const LOGIN_HOTEL_FAILURE = "LOGIN_HOTEL_FAILURE";

export const loginHotel = (hotelId) => {
    return (dispatch) => {
        return loginHotelAPI(hotelId).then(([response, json]) => {
            if (response.status === 200) {
                dispatch(loginHotelSuccess(json));
            } else {
                dispatch(loginHotelFailure());
            }
        });
    };
}

const loginHotelSuccess = (payload) => {
    return  {
        type: LOGIN_HOTEL_SUCCESS,
        payload
    };
}

const loginHotelFailure = () => {
    return {
        type: LOGIN_HOTEL_FAILURE
    };
}

const loginHotelAPI = (hotelId) => {
    const URL = `${baseEndpoint}/account/login`;
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            hotelId: hotelId
        })
    })
    .then(response => Promise.all([response, response.json()]));
};