import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const submit = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1>Welcome to Login Page</h1>
      <label>Email</label>&nbsp;
      <input></input>
      <br></br>
      <br></br>
      <lable>Password</lable>&nbsp;
      <input></input>
      <br></br>
      <br></br>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Login;
