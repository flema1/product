import { createStore , applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const store = createStore(
     rootReducer, {}, applyMiddleware( ReduxThunk, createLogger({collapsed: true})));

export default store