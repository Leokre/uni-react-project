import './App.css';
import { useRef,createRef,useEffect} from "react"
import {BrowserRouter as Router,Route,Link,useLocation} from 'react-router-dom'
import {default as Login} from "./pages/Login/Index"
import Register from "./pages/Login/Register"
import Confirmation from "./pages/Login/Confirmation"
import Button from "./components/Button"
import Axios from "axios"
import {useState} from "react"
import qs from "qs"
import {logout} from "./Helpers"
import Dashboard from "./pages/Startseite/Index.js"
import AddSession from "./pages/Startseite/AddSession.js"
import JoinSession from "./pages/Startseite/JoinSession.js"
import Home from "./pages/Home/index.js"
import Profil from "./pages/Profilseite/PersönlicheInfos/index.js"
import SchnellAntwort from "./pages/Profilseite/Schnellantworten/index.js"
import Gruppenmitglied from "./pages/Sessionverwalten/Gruppenmitglieder/index.js"
import Einladungslink from "./pages/Sessionverwalten/Einladungslink/index.js"
import Gruppenverwaltung from "./pages/Sessionverwalten/Gruppenmitglieder/index.js"

import Chat from "./pages/Chat/chatBody/ChatBody.js"

require('dotenv').config()

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [quickReplies, setquickReplies] = useState("");
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


  const getQuickReplies = () =>{
    if(!loggedIn) return
    console.log("Getting quick replies...")
    const rep = Axios.create({
      withCredentials: true
    })
    rep.get(backendURL +"/getQuickReplies").then(response => {
        console.log(response.data)
        let replies = []
        let i = 0;
        if(!response.data) return
        response.data.forEach(reply => {
          replies.push(
            {
              id:i++,
              value:reply
            })
        })
  
        setquickReplies(replies)
  
        
        
    })
  }

  useEffect(()=>{
    if(!quickReplies) getQuickReplies();
  })
  
  

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


            <Link to="/dashboard">
                  <Button cssClass="MainMenuButton" text="Dashboard" />
            </Link>
          
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>


              <Link to = "/meinprofil/infos"><Button cssClass="MainMenuButton" text={username}  id="profileButton"/>  </Link> 
                <Link to="/">
                <Button cssClass="MainMenuButton" text="Logout" id="logoutButton" onClick={()=>logout(backendURL)}/>
                </Link>
          </div>      
        </div>
  
        
        {/*Routing hier*/}

        <Route path="/sessionverwalten/gruppenmitglied" exact render={(props)=>(
        <>
         <Gruppenmitglied currentSession={props.location.state.currentSession}/>
        </>
        
      )}></Route>

<Route path="/sessionverwalten/einladungslink" exact render={(props)=>(
        <>
         <Einladungslink currentSession={props.location.state.currentSession}/>
        </>
        
      )}></Route>


<Route path="/sessionverwalten/gruppenverwaltung" exact render={(props)=>(
        <>
         <Gruppenverwaltung currentSession={props.location.state.currentSession} />
        </>
        
      )}></Route>
      
      



        <Route path="/Chat" exact render={(props)=>(
        <>
          <Chat currentSession={props.location.state.currentSession} currentUser={username} quickReplies={quickReplies}/>
        </>
        )}></Route>


        <Route path="/login" exact render={(props)=>(
        <>
          <Login />
        </>
        
      )}></Route>

<Route path="/dashboard" exact render={(props)=>(
        <>
          <Dashboard username={username}/>
        </>
        
      )}></Route>

      <Route path="/login/register" exact render={(props)=>(
        <>
          <Register />
        </>
        
      )}></Route>

<Route path="/meinprofil/infos" exact render={(props)=>(
        <>
          <Profil />
        </>
        
      )}></Route>


<Route path="/meinprofil/schnellantworten" exact render={(props)=>(
        <>
          <SchnellAntwort quickReplies={quickReplies}/>
        </>
        
      )}></Route>
      


<Route path="/" exact render={(props)=>(
        <>
          <Home/>
        </>
        
      )}></Route>


<Route path="/addSession" exact render={(props)=>(
        <>
          <AddSession/>
        </>
        
      )}></Route>

<Route path="/JoinSession" exact render={(props)=>(
        <>
          <JoinSession/>
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

<Route path="/sessionverwalten/gruppenmitglied" exact render={(props)=>(
        <>
         <Gruppenmitglied currentSession={props.location.state.currentSession}/>
        </>
        
      )}></Route>

<Route path="/sessionverwalten/einladungslink" exact render={(props)=>(
        <>
  
         <Einladungslink currentSession={props.location.state.currentSession}/>
        </>
        
      )}></Route>

      <Route path="/addSession" exact render={(props)=>(
        <>
          <AddSession/>
        </>
        
      )}></Route>

<Route path="/JoinSession" exact render={(props)=>(
        <>
          <JoinSession/>
        </>
        
      )}></Route>


<Route path="/" exact render={(props)=>(
        <>
          <Home/>
        </>
        
      )}></Route>
      
      
  
  
  
        
      </div>
      </Router>
    );

  }


  
}

export default App;
