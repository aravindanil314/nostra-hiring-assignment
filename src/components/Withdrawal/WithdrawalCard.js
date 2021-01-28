import React from "react";
import Withdraw from "../../assets/images/withdrawal.png";
import "./withdrawal.scss";

const WithdrawalCard = (props) => {
  return (
    <div className="withdrawal_card">
      <img src={Withdraw} alt="" />
      <div>
        <span className="bold">
          {props.data.amount} withdrawal{" "}
          {props.data.status === "success" ? "successfull" : "in progress..."}
        </span>
        <span className="semibold">withdrown from your winnings</span>
      </div>
    </div>
  );
};

export default WithdrawalCard;
