import React from 'react';

import { TextField, Button, Snackbar } from '@material-ui/core';
import { Outlet, Link } from 'react-router-dom';
import { store } from '../State/Store';
import { useDispatch } from 'react-redux';
import { actioncreator } from '../State/Indexa';
import { useState } from 'react';
import { Box } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
export default function Deposit() {
  const [dep, setdep] = useState(0);
  const [open, setOpen] = React.useState(false);

  const val = (e) => {
    setdep(parseFloat(e.target.value));
  
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const dispatch = useDispatch();
  return (
    <Box>
      <br />
      <div> Deposit Form </div>
      <br />
      <div>
        <TextField
          label="Amount to deposit"
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
            setOpen(true);
            dispatch(actioncreator.deposite(dep));

            // dispatch(actioncreator.handleDeposit(dep))
          }}
        >
          Deposit
        </Button>
      </Link>
      <Snackbar
        open={open}
        autoHideDuration={600000}
        onClose={handleClose}
        message="Note archived"
      />

      {/* <Formik initialValues={{ name: 0 }} onSubmit={(value) => { console.log(value); dispatch(actioncreator.deposite(parseFloat(value.name))) }}>
        <Form>
          <Field type="number" name="name" placeholder={100} />
          <br></br>
     
          <button >Summit</button>
  
        </Form>
      </Formik> */}
    </Box>
  );
}
