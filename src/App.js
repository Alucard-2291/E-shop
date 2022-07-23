import Header from './Header';
import Home from './Home';

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
