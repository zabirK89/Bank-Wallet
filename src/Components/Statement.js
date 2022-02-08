import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Button } from '@material-ui/core';
import { Outlet, Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
export default function Statement() {
  const account = useSelector((state) => state.account);
  console.log(account);
  return (
    <>
      <h1>Account Statement</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">When</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Amount (₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {account.transactions.map((t, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {t.amount}
                </TableCell>
                <TableCell align="center">{t.type}</TableCell>
                <TableCell component="th" scope="row" align="center">
                  {t.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Link to="/deposit">
          <Button color="secondary">DEPOSIT</Button>
        </Link>
        <Link to="/withdraw">
          <Button color="secondary">WITHDRAW</Button>
        </Link>
      </div>
    </>
  );
}
