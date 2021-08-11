import React, {useState,useEffect} from 'react';
import Loader from './components/Loader'
import './App.css';
import WelcomePage from './components/HomeWelcome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemList from './components/Items';
import Navbar from './components/Navbar';
import HomeWelcome from './components/HomeWelcome';

export default function App() {
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },0)
  },[])

  
  return (
    <div>
      {
        loading ?
        <div className="loader">
          <Loader/>
        </div>
        :
<Router>
  <Navbar/>
  <Switch>
  <div className="btn-msg">
    <Route path='/' exact component={HomeWelcome}/>
    <ItemList className="menuList"/>
    </div>
  </Switch>
    </Router>
      }
    </div>
  );
}