import { createStore,combineReducers } from 'redux';
import reducers from '../reducers';

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
    return createStore(rootReducer);
}
