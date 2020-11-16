const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const PIZZA_INCREMENT = 'PIZZA_INCREMENT'
const PIZZA_DECREMENT = 'PIZZA_DECREMENT'

export const setTotalPrice = (price) => {
    return {
        type: SET_TOTAL_PRICE,
        payload: price
    }
}

export const setTotalCount = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: count
    }
}

export const addPizzaToCartAC = (pizzaObj) => {
    return {
        type: ADD_PIZZA_TO_CART,
        payload: pizzaObj
    }
}

export const clearCartAC = () => {
    return {
        type: CLEAR_CART
    }
}

export const removeCartItemAC = (itemId) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: itemId
    }
}

export const addPizzaAC = (id, price) => {
    return {
        type: PIZZA_INCREMENT,
        id,
        price
    }
}

export const removePizzaAC = (id, price) => {
    return {
        type: PIZZA_DECREMENT,
        id,
        price
    }
}

