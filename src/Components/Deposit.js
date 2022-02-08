
import React from 'react'

import {TextField,Button} from "@material-ui/core"
import { Outlet, Link } from "react-router-dom";
import { store } from '../State/Store';
import { useDispatch } from 'react-redux';
import { actioncreator } from '../State/Indexa';
import { useState } from 'react';

export default function Deposit() {
  const [dep, setdep] = useState(100)

  const val = (e) => {

    setdep(parseFloat(e.target.value))
  

  }
  const dispatch = useDispatch()
  return  (
<div>

<div> Deposit Form </div>
<br/>
<div>
<TextField label="Filled success" variant="filled" color="" focused value={dep} placeholder={100} onChange={val}/>
</div>
<br/>
<Link to="/">
<Button variant="contained"  style={{backgroundColor:"blue",color:"white"}} 

onClick={() => {
        
  dispatch(actioncreator.deposite(dep));
  // dispatch(actioncreator.handleDeposit(dep))
}}
>
  Withdraw
</Button>
</Link>
  </div>
 
  
    );
}