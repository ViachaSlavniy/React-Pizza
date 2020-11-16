const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(Object.values(currentPizzaItems))
                } 
            }

            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }
        }
        case 'CLEAR_CART':

            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }

        case 'REMOVE_CART_ITEM': {
            const newCartItems = {
                ...state.items
            }
            const cartItemTotalCount = newCartItems[action.payload].items.length
            const cartItemTotalPrice = newCartItems[action.payload].totalPrice
            delete newCartItems[action.payload]

            return {
                ...state,
                items: newCartItems,
                totalCount: state.totalCount - cartItemTotalCount,
                totalPrice: state.totalPrice - cartItemTotalPrice
            }
        }
        case 'PIZZA_INCREMENT': {
            const newObjItems = [
                ...state.items[action.id].items,
                state.items[action.id].items[0]
            ]  

            const newStateItems = {
                ...state.items,
                [action.id]: {
                    ...state.items[action.id],
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                },
            }

            const items = Object.values(newStateItems).map(obj => obj.items.length)
            const newTotalCount = items.reduce((item1, item2) => item1 + item2)
            const newTotalPrice = Object.values(newStateItems).reduce((sum, obj) => obj.totalPrice + sum, 0)
        
            
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {
                        items: newObjItems,
                        totalPrice: getTotalPrice(newObjItems)
                    }
                },
                totalCount: newTotalCount,
                totalPrice: newTotalPrice
            }
        }
        case 'PIZZA_DECREMENT':
            const oldItems = state.items[action.id].items
            const newItems = oldItems.length > 1 
            ? state.items[action.id].items.slice(1)
            : oldItems

            const newStateItems = {
                ...state.items,
                [action.id]: {
                    ...state.items[action.id],
                    items: newItems,
                    totalPrice: getTotalPrice(newItems)
                } 
            }

            const items = Object.values(newStateItems).map(obj => obj.items.length)
            const newTotalCount = items.reduce((item1, item2) => item1 + item2)
            const newTotalPrice = Object.values(newStateItems).reduce((sum, obj) => obj.totalPrice + sum, 0)
        
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                },
                totalCount: newTotalCount,
                totalPrice: newTotalPrice
            }

        default: 
            return state;
    }
}

export default cart;