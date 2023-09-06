import React, { useContext } from "react";
import { Transaction } from "./transaction";
import { GlobalContext } from "../context/golbalstate";
export const Transactionlist = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Your Recent Transaction</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default Transactionlist;
