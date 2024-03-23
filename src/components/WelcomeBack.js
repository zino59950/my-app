import React, { useState } from "react";
import "./main.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../stores/user.js";

const WelcomeBack = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userName, setUserName] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const save = (e) => {
    e.preventDefault();
    setIsEdit(false);
    // Save the new name
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ userName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setUser(data.body));
      });
  };
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="welcome">
          Welcome back
          <br />
          {user?.userName}!
        </h1>
        <button className="edit-button" onClick={() => setIsEdit(true)}>
          Edit Name
        </button>
        {isEdit && (
          <form className="edit-form" onSubmit={(e) => save(e)}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    </main>
  );
};

export default WelcomeBack;
