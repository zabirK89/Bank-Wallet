import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { actioncreator } from '../State/Indexa';
export default function Withdraw( {setOpen }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="cont">
      <br />
      <div> Withdraw Form </div>
      <br />
       <Formik   initialValues={{ name:"100" }} onSubmit={(value) => {
            navigate('/')
           setOpen(true);
        dispatch(actioncreator.withdraw(parseFloat(value.name))) }}>
        <Form>
        <div>
          <label>Enter Amount</label>
          </div>
          <Field style={{border:"none",padding:'10px'}}  type="number" name="name" placeholder={100} />
          <br></br>  <br/>
          <button   style={{ backgroundColor: 'blue', color: 'white' ,border:"none" ,padding:"9px",borderRadius:"3px" }}>Withdraw</button>
        </Form>
      </Formik>
    </div>
  );
}
