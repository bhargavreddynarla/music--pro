import React, { useState } from "react";
import "./Login.scss";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const LogIn = (props) => {
  const [data, setData] = useState({ username: "", password: "" });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return props.trigger ? (
    <div style={{ marginTop: "5rem" }} className="login--Credentials">
      <center>
        <form onSubmit={submitHandler} className="login--Credentials--Form">
          <CloseIcon
            className="login--Credentials--Closeicon"
            onClick={() => props.setTrigger(false)}
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            className="login--Credentials--Email"
            placeholder="Your Email Address"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={changeHandler}
            className="login--Credentials--Password"
          />
          <br />
          <Button
            variant="contained"
            color="success"
            className="login--Credentials--Submitbtn"
            onClick={submitHandler}
          >
            Submit
          </Button>
          <Button variant="contained" className="login--Credentials--Createbtn">
            Create Account
          </Button>
        </form>
      </center>
    </div>
  ) : (
    ""
  );
};

export default LogIn;
