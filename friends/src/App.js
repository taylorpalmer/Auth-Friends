import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import LoginForm from "./components/LoginForm";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="App">
      <h1>Friends!</h1>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/friendList" component={FriendList} />
      </Switch>
    </div>
  );
}

export default App;
