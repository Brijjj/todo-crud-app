import React from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1>Welcome to SignUp Page</h1>
      <label>Name</label>&nbsp;
      <input></input>
      <br></br>
      <br></br>
      <label>Number</label>&nbsp;
      <input></input>
      <br></br>
      <br></br>
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

export default SignUp;
