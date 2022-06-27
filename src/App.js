import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Regester from './Components/Login/Regester';
import Products from './Components/Products/Products';
import NavBar from './Components/Shared/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='regester' element={<Regester />} />
      </Routes>
    </>
  );
}

export default App;
