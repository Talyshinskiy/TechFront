import Timer from "./Timer";
import {Link, Outlet} from 'react-router-dom'
import logoWhite from '@/assets/logoWhite.jpg'
import IconHome from '@/assets/iconHome.svg'
import FullscreenAuth from "@/page/auth/FullscreenAuth";


export const App = () => {
  function checkTS(a: number) {

  }

  checkTS(1)
  return (
      <div>

        <img src={logoWhite} height={300} width={1200}/>
        <Timer/>
        <h1>Apppppp</h1>
        <Link to={'/main'}>Main</Link>
        <IconHome fill={'red'} width={50} height={50}/>
        <br/>
        <Link to={'/about'}>About</Link>
        <br/>
        <Link to={'/quizzes'}>Quizzes</Link>
        <br/>
        <Link to={'/knowledgeDatabase'}>Knowledge Database</Link>
        <br/>
        <Link to={'/profile'}>Profile</Link>
        <br/>
        <Link to={'/auth'}>FullscreenAuth</Link>
        <Outlet/>

      </div>
  )
}