import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Product';
import Login from './Login';

function App() {
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
