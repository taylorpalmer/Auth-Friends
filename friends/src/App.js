import React from "react";
import "./App.css";

import LoginForm from "./components/LoginForm";
import NewFriendForm from "./components/NewFriendForm";

function App() {
  return (
    <div className="App">
      <h1>Friends!</h1>
      <LoginForm />
      <NewFriendForm />
    </div>
  );
}

export default App;
