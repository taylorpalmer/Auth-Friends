import React, { useState } from "react";
import axios from "axios";

const NewFriendForm = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const changeHandler = (event) => {
    if (event.target.name === username) {
      setUsername(event.target.value);
    } else if (event.target.name === age) {
      setAge(event.target.value);
    } else if (event.target.name === email) {
      setEmail(event.target.value);
    } else {
      console.log("invalid");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="new-friend-form">
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
          name="age"
          placeholder="age"
          value="age"
          onChange={changeHandler}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value="email"
          onChange={changeHandler}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewFriendForm;
