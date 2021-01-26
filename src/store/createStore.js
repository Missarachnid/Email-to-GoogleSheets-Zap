import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'
import initialState from '../reducers/initialState';

const store = createStore(rootReducer);

export default store;