import axios from 'axios'; 

const SET_PIZZAS = 'SET_PIZZAS';
const SET_LOADED = 'SET_LOADED';


export const setLoaded = val => ({
    type: SET_LOADED,
    payload: val
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then(({data}) => dispatch(setPizzas(data)));
    
    
}

export const setPizzas = (items) => {
    return {
        type: SET_PIZZAS,
        payload: items
    }
}


