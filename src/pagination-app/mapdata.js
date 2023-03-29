import React from "react";

const Mapdata = ({ user }) => {
  return user.map((user) => {
    return (
      <div>
        <table border={1}>
          <li>
            {user.id}
            {user.title}
            {user.body}
          </li>
        </table>
      </div>
    );
  });
};

export default Mapdata;
