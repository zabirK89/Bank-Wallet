
import React from "react"
import {Button } from "@material-ui/core"
import { Outlet, Link } from "react-router-dom";
export default function Actionbank() {
 return ( 
  <div className="cointainer"> 
  <br/>
    <div>hello user</div>
    <br/>
    <div> Your balance is 5000</div>
    <br/>
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
      </div>
  </div>
  ) ;
}
