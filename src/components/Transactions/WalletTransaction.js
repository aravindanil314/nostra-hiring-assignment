import React from "react";
import Wallet from "../../assets/images/add money-min.png";
import "./transactions.scss";

const WalletTransactions = (props) => {
  const renderStatus = () => {
    if (props.data.status === "success") {
      if (props.data.type === "add_to_wallet") {
        return "Add money Successfully";
      } else if (props.data.type === "remove_from_wallet") {
        return "Paid from  your wallet";
      }
    } else if (props.data.status === "failed") {
      return "Transaction Unsuccessful";
    }
  };

  return (
    <div className="wallet_transaction_card">
      <div className="card_header">
        <span className="bold">{props.data.amount}</span>
        <img src={Wallet} alt="" />
      </div>
      <div className="status">{renderStatus()}</div>
    </div>
  );
};

export default WalletTransactions;
