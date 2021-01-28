import React from "react";
import Contest from "../../assets/images/join a paid contest.png";
import "./transactions.scss";

const ContestTransactions = (props) => {
  return (
    <div className="contest_transaction_card">
      <div className="card_header">
        <span className="bold">{props.data.amount}</span>
        <img src={Contest} alt="" />
      </div>
      <div className="status">Join a paid Contest</div>
    </div>
  );
};

export default ContestTransactions;
