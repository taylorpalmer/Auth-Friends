import React, { useEffect, useState } from "react";

import NewFriendForm from "./NewFriendForm";
import axiosWithAuth from "./axiosWithAuth";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friend-list">
      <NewFriendForm />
    </div>
  );
};

export default FriendList;
