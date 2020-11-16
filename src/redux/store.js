import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import filters from './reducers/filters-reducer';
import pizzas from './reducers/pizzas-reducer';
import cart from './reducers/cart-reducer';

const rootReducer = combineReducers({
    filters, 
    pizzas,
    cart
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)));


export default store
