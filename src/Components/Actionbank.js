import React from 'react';
import { Button,Snackbar  } from '@material-ui/core';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Actionbank() {
  const account = useSelector((state) => state.account);
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="cointainer">
      <br />
      <div>hello user</div>
      <br />
      <div> Your balance is {account.amount}</div>
      <br />
      <div className="btn">
        <Link to="/statement">
          <Button color="secondary">STATEMENTS</Button>
        </Link>
        <Link to="/deposit">
          <Button color="secondary">DEPOSIT</Button>
        </Link>
        <Link to="/withdraw">
          <Button color="secondary">WITHDRAW</Button>
        </Link>

      <Snackbar
        open={open}
        autoHideDuration={600000}
        onClose={handleClose}
        message="Note archived"
      />
      </div>
    </div>
  );
}
