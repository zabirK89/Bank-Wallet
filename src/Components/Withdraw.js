
import React from 'react'
import {TextField,Button} from "@material-ui/core"
import { Outlet, Link } from "react-router-dom";
export default function Withdraw() {
    
  return  (
<div>
<br/>
<div> Withdraw Form </div>
<br/>
<div>
<TextField label="Amount to deposit"  variant="filled" color="" focused />
</div>
<br/>
<Link to="/">
<Button variant="contained"  style={{backgroundColor:"blue",color:"white"}}>
Withdraw
</Button>
</Link>

  </div>
 
  
    );
}