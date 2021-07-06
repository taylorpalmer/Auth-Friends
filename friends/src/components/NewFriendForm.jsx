import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";

const NewFriendForm = (props) => {
  console.log(props);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", { name, age, email })
      .then((res) => {
        return props.setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="new-friend-form">
      <h2>New Friend</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewFriendForm;
