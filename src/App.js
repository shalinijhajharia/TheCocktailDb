import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

import Login from './components/loginn/login';
import Register from './components/loginn/register';
import Forgot from './components/loginn/forgot';
import MainApp1 from './review/MainApp1';
import App1 from './review/App1';
// import components
import Navbar from './components/Navbar';
import Appcart from './components/cart/Appcart';

import { useGlobalContext } from './context'

function App() {
  const {loading}=useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/about">
            <About/>
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail/>
          </Route>
          <Route path="/mainreview">
            <MainApp1/>
          </Route> 
          <Route path="/review">
            <App1/>
          </Route> 
          <Route path="/login/:id">
            <Login/>
          </Route> 
          <Route path="/register/:id">
            <Register/>
          </Route> 
          <Route path="/Forgotpass/:id">
            <Forgot/>
          </Route>
          <Route path="/Appcart/:id">
            <Appcart/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
   
    
  );
}

export default App;
