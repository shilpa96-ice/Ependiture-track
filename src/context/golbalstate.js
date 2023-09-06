import React, { createContext, useReducer } from "react";
import appreducer from "./appreducer";
//intial state
const initialState = {
  transactions: [
    { id: 1, text: 'Notebook', amount: -50 },
     { id: 2, text: 'Salary', amount: 20000 },
       { id: 3, text: 'Study Table', amount: -800 },
     { id: 4, text: 'Water Bottle', amount: -250 }
  ],
};
//created context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appreducer, initialState);
  //action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  //addtransaction
  function addTransaction(transaction) {
    console.log("add new transaction", transaction);
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
