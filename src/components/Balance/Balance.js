import React, { useContext } from "react";
import { AppContext } from "../../Store";
import "./balance.scss";

const Balance = (props) => {
  const { state } = useContext(AppContext);

  return (
    <div className="balance_card">
      <div className="balance_amt">
        TOTAL BALANCE <span>{state.walletData.wallet_balance}</span>
      </div>
      <div className="withdrawal_status">
        <span>
          {state.walletData.withdrawals
            ? state.walletData.withdrawals.length
            : 0}
        </span>{" "}
        withdrawal in progress
      </div>
    </div>
  );
};

export default Balance;
