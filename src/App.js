import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import React, { Component }  from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Product';
import Login from './Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase.js';
import { useStateValue } from './StateProvider';

function App() {

  const [{basket, user}, dispatch]= useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <BrowserRouter>
      
      <Routes>
        <Route path={'/'} element={<><Header/><Home/></>}/>
        <Route path={'/checkout'} element={<><Header/><Checkout/></>}/>
        <Route path={'/login'} element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
