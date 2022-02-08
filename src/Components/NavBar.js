import React from "react"

import {AppBar,Toolbar,Typography} from "@material-ui/core"
export default function Navbar() {
    
  return  (
  
<AppBar position="static">
  <Toolbar variant="dense">
  
    <Typography variant="h6" color="inherit" component="div">
   My Bank
    </Typography>
  </Toolbar>
</AppBar>
  
    );
}