import React, { useState } from "react";
import axios from "axios";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("change: ", username, password);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:5000/api/login", { username, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendList");
        setUsername("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });

    setIsLoading(false);
  };

  return (
    <div className="login-form">
      <h2>{isLoading ? "...loading" : "Login"}</h2>
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
