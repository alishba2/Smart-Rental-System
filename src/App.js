import logo from './logo.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './Components/LandingPage/landing';
import Login from './Components/Login/login';

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
