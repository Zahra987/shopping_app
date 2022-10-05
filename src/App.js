import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Store from './Components/Pages/Store';
import Cart from './Components/Pages/Cart';
import Orders from './Components/Pages/Orders';
import Saved from './Components/Pages/Saved';
import AboutUs from './Components/Pages/AboutUs';
import ContactUs from './Components/Pages/ContactUs';
import Login from './Components/Pages/Login';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Navigate replace to='/'/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/saved' element={<Saved/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;