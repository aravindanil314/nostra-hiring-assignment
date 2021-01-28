import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./styles/common/app.scss";
import { AppContext } from "./Store";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Challenge from "./components/Challenge/CardContainer";
import Loader from "./components/Loader/Loader";

function Home() {
  const { dispatch } = useContext(AppContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/home`)
      .then((res) => {
        const data = res.data;
        dispatch({
          type: "get-data",
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
      <Header text="Home" back={false} />
      <Banner />
      <Nav />
      <Challenge />
    </>
  );
}

export default Home;
