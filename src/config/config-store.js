import rootReducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

export const configure = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware));
    persistStore(store);
    return store;
};