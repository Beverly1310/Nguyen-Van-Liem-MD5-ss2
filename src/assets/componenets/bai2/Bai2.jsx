import React, { useState } from 'react'

function Bai2() {
    const [phrase,setPhrase] = useState("lorem ipsum")
    const handleEdit = ()=>{
        setPhrase("Hello World")
    }
  return (
   <>
    <h1>{phrase}</h1>
    <button onClick={handleEdit}>Reverse</button>
   </>
  )
}

export default Bai2