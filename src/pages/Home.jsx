import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Categories, SortPopup, PizzaBlock, Loader} from '../components';
import { setCategory, setSortBy } from './../redux/actions/filters';
import { addPizzaToCartAC } from './../redux/actions/cart';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryItems = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
const sortItems = [
  {name: 'популярности', type: 'rating', order: 'desc'}, 
  {name: 'цене', type: 'price', order: 'desc'}, 
  {name: 'алфавиту', type: 'name', order: 'asc'}
];

function Home() {    
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const cartItems = useSelector(({cart}) => cart.items);
  const {category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  },[category, sortBy]);  

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSort = React.useCallback((sort) => {
    dispatch(setSortBy(sort));
  }, []);

  const addPizzaToCart = obj => {
    dispatch(addPizzaToCartAC(obj))
  }
 
    return (
        <div className="container">
          <div className="content__top">
            <Categories onClickCategory={onSelectCategory} items={categoryItems} currentCategoryItem={category}/>
            <SortPopup onClickSortType={onSelectSort} activeSortType={sortBy.type} items={sortItems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {
               isLoaded 
               ? items.map(obj => <PizzaBlock 
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
                onClickAddPizza={addPizzaToCart} 
                key={obj.id} 
                {...obj}/>)
               : Array(12).fill(0).map((_, index) => <Loader key={index}/>)
              }
          </div>
        </div>
    )
}

export default Home
