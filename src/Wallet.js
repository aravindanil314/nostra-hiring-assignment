import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./styles/common/app.scss";
import { AppContext } from "./Store";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import Withdrawals from "./components/Withdrawal/WithdrawalContainer";
import Transactions from "./components/Transactions/TransactionsContainer";
import Loader from "./components/Loader/Loader";

function Home() {
  const { dispatch } = useContext(AppContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/wallet`)
      .then((res) => {
        const data = res.data;
        dispatch({
          type: "wallet-data",
          payload: data,
        });
      })
      .then(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      {loader && <Loader />}
      <Header text="Transaction History" back={true} />
      <Balance />
      <Withdrawals />
      <Transactions />
    </>
  );
}

export default Home;
