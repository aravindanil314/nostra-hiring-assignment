import React, { useContext } from "react";
import { AppContext } from "../../Store";
import WalletTransaction from "./WalletTransaction";
import ContestTransactions from "./ContestTransaction";
import "./transactions.scss";

const TransactionsContainer = (props) => {
  const { state } = useContext(AppContext);

  return (
    <div className="transactions_container">
      <div className="transactions_bx">
        {state.walletData.transactions &&
          state.walletData.transactions.map((value, index) => {
            if (value.type !== "join_contest")
              return <WalletTransaction key={index} data={value} />;
            else return null;
          })}
      </div>
      <div className="transactions_bx">
        {state.walletData.transactions &&
          state.walletData.transactions.map((value, index) => {
            if (value.type === "join_contest")
              return <ContestTransactions key={index} data={value} />;
            else return null;
          })}
      </div>
    </div>
  );
};

export default TransactionsContainer;
