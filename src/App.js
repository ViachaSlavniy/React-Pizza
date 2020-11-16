import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import {Header} from './components';
import {Home, Cart} from './pages';


function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path='/' component={Home}/>
          <Route path='/cart' component={Cart}/>
        </div>
    </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))  
//   }
// }

export default App;
