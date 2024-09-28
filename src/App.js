import Nav from './components/Nav';

import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './pages/Books';
import { books } from './data'
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import React, { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id)
    if (dupeItem) {
      setCart(
        cart.map(item => {
          if (item.id === dupeItem.id)
            return {
              ...item,
              quantity: item.quantity + 1
            }
          else
            return item
        }))
    }
    else
      setCart([...cart, { ...book, quantity: 1 }])
  }

  function changeQuantity(book, newQuantity) {
    setCart(
      cart.map(item => {
        if (item.id === book.id)
          return {
            ...item,
            quantity: +newQuantity
          }
        else
          return item
      }))
  }

  function removeFromCart(book) {
    setCart(cart.filter(item => {
      return item.id !== book.id
    }))
  }

  function numItemsInCart() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() => {

  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numItemsInCart={numItemsInCart()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
