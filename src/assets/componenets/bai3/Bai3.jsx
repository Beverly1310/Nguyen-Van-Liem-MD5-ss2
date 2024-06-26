import React, { useState } from 'react'

function Bai3() {
    const [text,setText] = useState("");
    const handleChange = (e)=>{
        e.preventDefault()
        console.log(e.target);
        setText(e.target.text.value);
    } 
  return (
    <>
    <p>{text}</p>
    <form onSubmit={handleChange}>
    <input type="text" name='text'/>
    <input type='submit' ></input>
    </form>
    </>
  )
}

export default Bai3