import React, { useContext, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext, AppReducer } from "./Store";
import Home from "./Home";
import Wallet from "./Wallet";
import "./styles/common/app.scss";

function App() {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState.state);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
