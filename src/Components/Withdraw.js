import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actioncreator } from '../State/Indexa';
import { useState } from 'react';
export default function Withdraw() {
  const [wit, setwit] = useState(0);
  const dispatch = useDispatch();
  const val = (e) => {
    setwit(parseFloat(e.target.value));
  };
  return (
    <div>
      <br />
      <div> Withdraw Form </div>
      <br />
      <div>
        <TextField
          label="Amount to Withdraw"
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
          onClick={(e) => {
            dispatch(actioncreator.withdraw(wit));
          }}
        >
          Withdraw
        </Button>
      </Link>
    </div>
  );
}
