import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai2 from './assets/componenets/bai2/Bai2'
import Bai3 from './assets/componenets/bai3/Bai3'
import BTVN from './assets/componenets/btvn/BTVN'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BTVN/>
    </>
  )
}

export default App
