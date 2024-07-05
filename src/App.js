import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App(){
 
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AddTask/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
      </Routes>
    </div>
  )
}
