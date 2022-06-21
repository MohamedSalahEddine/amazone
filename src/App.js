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

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/checkout'} element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
