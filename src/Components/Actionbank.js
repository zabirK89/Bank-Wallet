
import React from "react"
import {Button } from "@material-ui/core"
export default function Actionbank() {
 return ( 
  <div className="cointainer"> 
    <div>hello user</div>
    <div> Your balance is 5000</div>
    <div className="btn">
<Button color="secondary">STATEMENTS</Button>
<Button color="secondary">DEPOSIT</Button>
<Button color="secondary">WITHDRAW</Button>
      </div>
  </div>
  ) ;
}
