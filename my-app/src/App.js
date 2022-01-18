import React from 'react'
import { Routes, Route } from "react-router-dom"
import Init_1 from "./pages/init1"
import Init_2 from "./pages/init2"


const name = 'John'
const element = <p>Hello {name}</p>



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Init_1/> } />
        <Route path="Init_2" element={ <Init_2/> } />
      </Routes>
    </div>
  )
}

export default App