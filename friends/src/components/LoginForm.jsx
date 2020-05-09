import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const changeHandler = (event) => {
  //   if (event.target.name === username) {
  //     setUsername(event.target.value);
  //   } else if (event.target.name === password) {
  //     setPassword(event.target.value);
  //   } else {
  //     console.log("invalid");
  //   }
  // };
  console.log("change: ", username, password);

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
