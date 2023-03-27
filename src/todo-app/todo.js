import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [toggel,setToggel]=useState(true)
  const [edit,setEdit]=useState(null)
  const add = () => {
    if (!input) {
      alert("plz add words");
    } 
    else {
    
    setItem([...item, input]);
    setInput("");
  };
  }
  const deleteItem = (id) => {
    console.log(id);
    // const abc=item.filter((el,ind)=>{
    //   return !ind===id
    // })
    // setItem(abc)
    const deleteOne = [...item];
    deleteOne.splice(id, 1);
    setItem(deleteOne);

   

  };
  const editItem=(name,index)=>{
console.log(name)
setInput(name)
setToggel(false)
setEdit(index)

  }
  const updateItem=()=>{
    setToggel(true)
    setInput("")
    item[edit]=input

  }

  const removeAll = () => {
    setItem([]);
  };
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)}value={input}></input>
     {
      toggel? <button onClick={add}>+</button>: <button onClick={updateItem}>Edit</button>
     }
      <button onClick={removeAll}>Remove All</button>
      {item.map((el, ind) => {
        return (
          <div key={ind}>
            <h3>{el}</h3>
            <button
              onClick={() => {
                deleteItem(ind);
              }}
            >
              Delete
            </button>
            <button onClick={()=>editItem(el,ind)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
