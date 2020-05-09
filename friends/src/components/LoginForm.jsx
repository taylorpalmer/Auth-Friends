import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (event) => {
    if (event.target.name === username) {
      setUsername(event.target.value);
    } else if (event.target.name === password) {
      setPassword(event.target.value);
    } else {
      console.log("invalid");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form">
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value="username"
          onChange={changeHandler}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value="password"
          onChange={changeHandler}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
