import React, { useContext } from "react";
import { AppContext } from "../../Store";
import Card from "./Card";
import "./card.scss";

const CardContainer = (props) => {
  const { state } = useContext(AppContext);

  return (
    <div className="card_container">
      {state.apiData.challenges &&
        state.apiData.challenges.map((value, index) => {
          return <Card key={index} data={value} />;
        })}
    </div>
  );
};

export default CardContainer;
