import Timer from "./Timer";
import {Link, Outlet} from "react-router-dom";

export const App = () => {

  return (
      <div>
        <h1>Apppppp</h1>
        <Timer/>
        <Timer/>
        <Link to={'/main'}>Main</Link>
        <br/>
        <Link to={'/about'}>About</Link>
        <br/>
        <Link to={'/quizzes'}>Quizzes</Link>
        <br/>
        <Link to={'/knowledgeDatabase'}>Knowledge Database</Link>
        <Outlet/>
      </div>
  )
}