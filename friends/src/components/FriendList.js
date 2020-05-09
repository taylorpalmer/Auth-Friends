import React, { useEffect, useState } from "react";

import NewFriendForm from "./NewFriendForm";
import axiosWithAuth from "./axiosWithAuth";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("friends:", friends);

  return (
    <div className="friend-list">
      <NewFriendForm setFriends={setFriends} />
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <p>{friend.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendList;
