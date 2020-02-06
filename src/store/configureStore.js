import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage'
import reducers from '../reducers';
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';

//import { routerReducer } from 'react-router-redux'
import { connectRouter } from 'connected-react-router'
export const history = createBrowserHistory()

const enhancer = compose()(
    persistState('user')
);

//const rootReducer = combineReducers({
//    ...reducers,
//    router: routerReducer
//});
const rootReducer = (history) => combineReducers({
    ...reducers,
    router: connectRouter(history),
    // rest of your reducers
})
//{
//    places: function() { }
//    users: function() { }
//}

//store.places
//store.users
//export default function store = createStore(function (state, action) {
//    return state;
//}, {});
//export default function configureStore(middleware) {
//    return createStore(
//        rootReducer,
//        applyMiddleware(middleware),
//        enhancer
//    );
//}

export default function configureStore(middleware) {
    return createStore(
        rootReducer(history),
        compose(
            persistState('user'),
            applyMiddleware(middleware, thunk)
        )
    );
}

//export default function configureStore(preloadedState) {
//    const store = createStore(
//        rootReducer(history), // root reducer with router state
//        preloadedState,
//        compose(
//            persistState('user'),
//            applyMiddleware(
//                connectRouter(history), // for dispatching history actions
//                // ... other middlewares ...
//            ),
//        ),
//    )

//    return store
//}