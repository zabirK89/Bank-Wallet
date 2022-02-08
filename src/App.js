import React from 'react';
import './style.css';
import NavBar from './Components/NavBar';
import Actionbank from './Components/Actionbank';
import Statement from './Components/Statement';
import Withdraw from './Components/Withdraw';
import Deposit from './Components/Deposit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Actionbank />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/statement" element={<Statement />} />
      </Routes>
    </BrowserRouter>
  );
}
