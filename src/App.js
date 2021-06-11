import {useEffect} from 'react'
import './App.css'
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import Product from './Product'
import Footer from './Footer'
import Navlinks from './Navlinks'
import {auth} from './firebase'
import { useStateValue } from './StateProvider'



function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Router path="/checkout">
        <Header/>
        <Checkout/>
        </Router>
        <Router path="/login">
        <Login/>
        </Router>
        <Route path="/">
            <Header/>
            <Navlinks/>
            <Home/>
            <Footer/>
        </Route>    
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
