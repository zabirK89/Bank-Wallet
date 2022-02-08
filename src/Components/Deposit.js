import React from 'react';

import { TextField, Button } from '@material-ui/core';
import { Outlet, Link } from 'react-router-dom';
import { store } from '../State/Store';
import { useDispatch } from 'react-redux';
import { actioncreator } from '../State/Indexa';
import { useState } from 'react';
import { Box } from '@material-ui/core';
export default function Deposit() {
  const [dep, setdep] = useState(100);

  const val = (e) => {
    setdep(parseFloat(e.target.value));
  };
  const dispatch = useDispatch();
  return (
    <Box>
      <br />
      <div Style={{ fontSize: '' }}> Deposit Form </div>
      <br />
      <div>
        <TextField
          label="Filled success"
          variant="filled"
          color=""
          focused
          placeholder={100}
          onChange={val}
        />
      </div>
      <br />
      <Link to="/">
        <Button
          variant="contained"
          style={{ backgroundColor: 'blue', color: 'white' }}
          onClick={() => {
            dispatch(actioncreator.deposite(dep));
            // dispatch(actioncreator.handleDeposit(dep))
          }}
        >
          Deposit
        </Button>
      </Link>
    </Box>
  );
}
