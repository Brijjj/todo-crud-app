import React, { useEffect, useState } from "react";
import axios from "axios";

const Sort = () => {
  const [input, setInput] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    setInput(response.data);
  };

  useEffect(() => {
    fetchData();

  
  }, []);

  const ascending = () => {
    let data = input.sort((a, b) => a.id - b.id);
    setInput([...data]);
  };

  const descending = () => {
    let data = input.sort((a, b) => b.id - a.id);
    setInput([...data]);
  };
  return (
    <div>
      <h1>Sort Api-Data</h1>
      <button onClick={ascending}>Ascending</button>&nbsp;&nbsp;
      <button onClick={descending}>Descending</button>
      <br></br>
      <br></br>
      {input.map((el, index) => {
        return (
          <div key={index}>
            <table border={2}>
              {el.id} {el.title} {el.body}
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Sort;
