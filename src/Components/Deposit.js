import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actioncreator } from '../State/Indexa';
import { Formik, Form, Field } from 'formik';
export default function Deposit({ setOpen }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (


    <div className="cont">
      <br />
      <h4> Deposit Form </h4>
      <br />
      <Formik   initialValues={{ name: "" }} onSubmit={(value) => {  
         navigate('/')
        setOpen(true);
         console.log(value); dispatch(actioncreator.deposite(parseFloat(value.name))) }}>
        <Form>
          <div>
          <label>Enter Amount</label>
          </div>
          <Field style={{border:"none",padding:'10px'}}  type="number" name="name"  />
          <br></br>
     <br/>
          <button  style={{ backgroundColor: 'blue', color: 'white' ,border:"none" ,padding:"9px",borderRadius:"3px" }}>Deposit</button>
  
        </Form>
      </Formik>
    </div>
  );
}
