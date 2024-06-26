import React, { useState } from 'react'
function BTVN() {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState("");


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('before ', data);
      setData([...data, e.target.search.value]);
  
      e.target.search.value = '';
    };
  
    const handleDelete = (index) => {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    };
    const handleEdit = (index) =>{
     setEdit(data[index]);
     
       
    }
  
    return (
      <>
        {console.log('after ', data)}
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="search" id="" defaultValue={edit} placeholder="search" />
          <input type="submit" />
        </form>
        {data.map((item, index) => (
          <li key={index}>
            <input type="checkbox" name="note" id="" />
            {item} <button onClick={() => handleEdit(index)} >Edit</button>
            <button onClick={() => handleDelete(index)} >Delete</button>
          </li>
        ))}
      </>
    );
}

export default BTVN