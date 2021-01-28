import React, { useContext } from "react";
import { AppContext } from "../../Store";
import WithdrawalCard from "./WithdrawalCard";
import "./withdrawal.scss";

const WithdrawalContainer = (props) => {
  const { state } = useContext(AppContext);

  return (
    <div className="withdrawal_container">
      {state.walletData.withdrawals &&
        state.walletData.withdrawals.map((value, index) => {
          return <WithdrawalCard key={index} data={value} />;
        })}
    </div>
  );
};

export default WithdrawalContainer;
