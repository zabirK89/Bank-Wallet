let init = {
  amount: 5000,
  transactions: [],
};

const reducer = (State = init, action) => {
  if (action.type === 'deposit') {
    let obj = {
      amount: action.payload,
      type: 'deposit',
    };
    return {
      amount: State.amount + action.payload,
      transactions: [...State.transactions, obj],
    };
  } else if (action.type === 'withdraw') {
    let obj = {
      amount: action.payload,
      type: 'withdraw',
    };
    return {
      amount: State.amount - action.payload,
      transactions: [...State.transactions, obj],
    };
  } else {
    return State;
  }
};
export default reducer;
