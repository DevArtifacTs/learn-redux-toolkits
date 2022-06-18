import './App.css';

import { Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Signin from './pages/Signin';

import { useSelector } from 'react-redux';

//! protect routes by separate component with user condition

function UnAuthApp() {
  return(
    <div className='App'>
      <Routes>
        <Route exact path='/signin' element = {<Signin />}  />
        <Route exact path='/' element = {<Products />}  />
      </Routes>
    </div>
    )
}
function AuthApp() {
  return(
    <div className='App'>
      <Routes>
        <Route exact path='/cart' element = {<Cart />}  />
        <Route exact path='/' element = {<Products />}  />
      </Routes>
    </div>
  )
}

function App() {
  const user = useSelector(state => state.auth.user);

  return (
    <div className='App'>
      <Nav />
      {user? <AuthApp /> : <UnAuthApp />}      
    </div>
  );
}

export default App;
