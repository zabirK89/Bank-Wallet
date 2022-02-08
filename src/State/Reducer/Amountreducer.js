const reducer=(State=5000,action)=>{

  if(action.type==="deposite"){
      return State+action.payload
  }else if(action.type==="withdraw"){
      console.log("Action = ",action);
      return State-action.payload;
  }
  else{
      return State;
  }
  
  }
  export default reducer