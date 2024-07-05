import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar(){
 
  return(
    <div className="box">
      <Link className="button btn btn-success" to="/">Add Task</Link>
      <Link className="button btn btn-info" to="/tasks">Tasks</Link>
    </div>
  )
}
