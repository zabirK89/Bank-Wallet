
import React from 'react'

import {TextField,Button} from "@material-ui/core"
import { Outlet, Link } from "react-router-dom";
import {Fromik,Form,Field} from "formik"
export default function Deposit() {
    
  return  (
<div>

<div> Deposit Form </div>
<br/>
<div>

  <Formik>
    <Form>
<TextField label="Filled success" variant="filled" color="" focused />
</Form>
</Formik>
</div>
<br/>
<Link to="/">
<Button variant="contained"  style={{backgroundColor:"blue",color:"white"}}>
Deposit
</Button>
</Link>
  </div>
 
  
    );
}