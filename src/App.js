import React from 'react';
import './style.css';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import Actionbank from './Components/Actionbank';
import Statement from './Components/Statement';
import Withdraw from './Components/Withdraw';
import Deposit from './Components/Deposit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Actionbank />} />
        <Route
          path="/deposit"
          element={<Deposit setOpen={setOpen}></Deposit>}
        />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/statement" element={<Statement />} />
      </Routes>
      <Snackbar
        open={open}
        autoHideDuration={600000}
        onClose={handleClose}
        message="Note archived"
      />
    </BrowserRouter>
  );
}
