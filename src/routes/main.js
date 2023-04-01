import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <ul>
        <Link to="/login">
          <li>Login</li>
        </Link>

        <Link to="/signUp">
          <li>SignUP</li>
        </Link>
      </ul>
    </div>
  );
};

export default Main;
