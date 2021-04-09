import './App.css';
import { useRef,createRef } from "react"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {default as Login} from "./pages/Login/Index"
import Register from "./pages/Login/Register"
import {default as ProfChatOverview} from "./pages/ProfChatOverview/Index"
import Confirmation from "./pages/Login/Confirmation"
import Button from "./components/Button"
import Axios from "axios"
import {useState} from "react"
import qs from "qs"
import {logout} from "./Helpers"
import Dashboard from "./pages/Startseite/index.js"
import AddSession from "./pages/Startseite/AddSession.js"
import Sessionverwalten from "./pages/Sessionverwalten/SessionVerwalten.js"
import Chat from "./pages/Chat/chatBody/ChatBody.js"


function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const backendURL="http://localhost:5000"
  





  function checkAuth(){
    
    const check = Axios.create({
      withCredentials: true
    })
   check.get(backendURL + "/checkAuth",{
    /*
    headers:{
       "x-access-token": localStorage.getItem("token")
     },
     */
   }).then((response) =>{
    if(response.data.user == null) {
      console.log("NOT_AUTHORIZED")
    }else{
      setloggedIn(response.data.auth)
      setUsername(response.data.user.name)
    }
   } )
  
  }

  if(!loggedIn){
    checkAuth();
  }
  
  if(loggedIn){
    return loggedInMenu()
  }else{
    return loggedOutMenu()
  }


  {/*Hier ist das Menü für eingeloggte Nutzer*/}
  function loggedInMenu(){
    return (
      <Router>
      <div className="App">
        {/*Weiterleitungslogik hier rein*/}

        <div className="MainMenu">
          <div className="Buttons">
            <Link to="/">
                  <Button cssClass="MainMenuButton" text="Home" className="homeButton"/>
            </Link>
            <Link to="/Chat">
              <Button cssClass="MainMenuButton" text="Chat" className="ProfChatOverviewButton"/>
            </Link>

            <Link to="/dashboard">
                  <Button cssClass="MainMenuButton" text="Dashboard" />
            </Link>
          
                <Button cssClass="MainMenuButton" text={username} id="profileButton"/>  
                <Button cssClass="MainMenuButton" text="Logout" id="logoutButton" onClick={()=>logout(backendURL)}/>
          </div>      
        </div>
  
        
        {/*Routing hier*/}
        <Route path="/Chat" exact render={(props)=>(
        <>
          <Chat currentSession="1"/>
        </>
        )}></Route>
        <Route path="/ProfChatOverview" exact render={(props)=>(
        <>
          <ProfChatOverview />
        </>
      )}></Route>
        <Route path="/login" exact render={(props)=>(
        <>
          <Login />
        </>
        
      )}></Route>

<Route path="/dashboard" exact render={(props)=>(
        <>
          <Dashboard />
        </>
        
      )}></Route>

      <Route path="/login/register" exact render={(props)=>(
        <>
          <Register />
        </>
        
      )}></Route>
      
  
  
  
        
      </div>
      </Router>
    );

  }

  {/*Hier ist das Menü für ausgeloggte Nutzer*/}
  function loggedOutMenu(){
    return (
      <Router>
      <div className="App">
        {/*Weiterleitungslogik hier rein*/}
        <div className="MainMenu">
        <div className="Buttons">
        <Link to="/">
              <Button cssClass="MainMenuButton" text="Home" className="homeButton"/>
        </Link>
        <Link to="/Chat">
              <Button cssClass="MainMenuButton" text="Chat" className="ProfChatOverviewButton"/>
        </Link>

        <Link to="/dashboard">
                  <Button cssClass="MainMenuButton" text="Dashboard" />
            </Link>

        <Link to="/login">
              <Button cssClass="MainMenuButton" id="loginButton" text="Login" className="loginButton"/>
        </Link>
        <Link to="/login/register">
              <Button cssClass="MainMenuButton" text="Register" className="Register"/>
        </Link>

        </div>
        </div>
        
        {/*Routing hier*/}
        <Route path="/Chat" exact render={(props)=>(
        <>
          <Chat />
        </>
      )}></Route>
        <Route path="/login" exact render={(props)=>(
        <>
          <Login />
        </>
        

        
      )}></Route>

<Route path="/dashboard" exact render={(props)=>(
        <>
          <Dashboard />
        </>
        
      )}></Route>

      <Route path="/login/register" exact render={(props)=>(
        <>
          <Register />
        </>
        
      )}></Route>

<Route path="/Sessionverwalten" exact render={(props)=>(
        <>
         <Sessionverwalten/>
        </>
        
      )}></Route>
      

      <Route path="/addSession" exact render={(props)=>(
        <>
          <AddSession/>
        </>
        
      )}></Route>
      
  
  
  
        
      </div>
      </Router>
    );

  }


  
}

export default App;
