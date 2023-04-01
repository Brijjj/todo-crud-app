import React, { useState } from "react";
import axios from "axios";
import Page from "./page";
// import Mapdata from "./mapdata";
const User = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [postperPage, setpostperpage] = useState(20);

  const fetchData = async () => {
    try{
const response = await axios.get(
  "https://jsonplaceholder.typicode.com/posts"
)
setUser(response.data);
    }catch(err){
      console.log(err)
    }
  };
  const firstIndex = currentPage * postperPage;
  const lastIndex = firstIndex - postperPage;
  const currentpost = user.slice(lastIndex, firstIndex);
  console.log(currentpost);

  return (
    <div>
      <button onClick={fetchData}>API-Data</button>
      <br></br>
      {
         currentpost.map((user) => {
          return (
            <div>
              <li>
                {user.id}
                {user.title}
                {user.body}
              </li>
            </div>
          );
        })
      }
      <br></br>
      <Page
        totalpost={user.length}
        postperpage={postperPage}
        setCurrentPage={setCurrentpage}
      />
      <br></br>
      {/* <Mapdata user={currentpost} /> */}
    </div>
  );
};

export default User;

