import { createStore, combineReducers, compose } from 'redux';
import persistState from 'redux-localstorage'
import reducers from '../reducers';

const enhancer = compose(
    persistState('user')
);

const rootReducer = combineReducers({
    ...reducers
});

//{
//    places: function() { }
//    users: function() { }
//}

//store.places
//store.users
//export default function store = createStore(function (state, action) {
//    return state;
//}, {});

export default function configureStore() {
    return createStore(rootReducer, {},enhancer);
}
