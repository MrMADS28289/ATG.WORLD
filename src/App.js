import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Dhashboard2 from './Components/Dashboard/Dhashboard2';

function App() {
  return (
    <>
      <Routes >
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/dhashboard' element={<Dhashboard2 />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
