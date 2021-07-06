import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="App">
      <h1>Friends!</h1>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute path="/friendList" component={FriendList} />
      </Switch>
    </div>
  );
}

export default App;
