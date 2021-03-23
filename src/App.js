import './App.css';
import { useRef,createRef } from "react"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {default as Login} from "./pages/Login/Index"
import {default as ProfChatOverview} from "./pages/ProfChatOverview/Index"
import Confirmation from "./pages/Login/Confirmation"
import Button from "./components/Button"

function App() {
  let username,password,registered = "";
  function callback(user,pass,reg){
    username = user;
    password = pass;
    registered = reg;

  }
  return (
    <Router>
    <div className="App">
      {/*Weiterleitungslogik hier rein*/}
      <p>Navigation:</p>
      <Link to="/login">
            <Button text="Login" className="loginButton"/>
      </Link>

      
      {/*Routing hier*/}
      <Route path="/login" exact render={(props)=>(
      <>
        <Login callback={callback}/>
      </>
    )}></Route>
    <Route path="/login/confirmation" exact render={(props)=>(
      <>
        <Confirmation user={username} password={password} showpassword={registered}/>
      </>
    )}></Route>


      
    </div>
    </Router>
  );
}

export default App;
