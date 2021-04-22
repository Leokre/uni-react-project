import Button from "../../components/Button";
import Input from "../../components/Input";
import {useState,setState} from "react";
import {Link} from "react-router-dom"
import Axios from "axios"
import qs from "qs"
import {register} from "../../Helpers"
import "./Login.css"
import Bild from './Login.png'
/*

isLoggedIn is not set properly


*/

const Index = ({}) => {
    const [username, setUsername] = useState("Username");
    const [password, setPassword] = useState("Password");
    const [loggedIn, setloggedIn] = useState(false);
    const [alreadyRegistered, setAlreadyRegistered] = useState(loggedIn);
    const backendURL = process.env.REACT_APP_BACKEND_URL
    const defaultPassword = "NoPass"

    const login = (usr,pwd)=>{

        const log = Axios.create({
            withCredentials: true
          })

          log({
              method: 'post',
              url: backendURL+"/Login",
              data: qs.stringify({
                username: usr,
                password: pwd
              }),
              headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
            }).then(response => {
                //console.log(response)
                if(!response.data){
                   setloggedIn(false);
                }else{
                   setloggedIn(response.data.auth)
                    
                   if(response.data.msg == "UserNamePasswordError") alert("Username oder Passwort sind falsch")
                    
                   window.location.reload();
                    

                    
                }
              
          })
      }

     
      

    if(!alreadyRegistered){
        return (
            <div className = "container">
                
<div className ="form">
<img src = {Bild} className="Bild"></img>
                <h1>Willkommen auf unserer Plattform</h1>
                <h4>Wie dürfen wir sie nennen?</h4>
                <Input  state={username} setState={setUsername}/>
                
               
                <Button text="Login" className="loginButton" onClick={() => {
                   register(username,defaultPassword,backendURL)
                   setTimeout(()=>{login(username,defaultPassword); }, 100)
               



                }}/>
              <br></br>  <br></br> 
              <Button text="Bereits Mitglied?" className="alreadyRegisteredButton" onClick={e => setAlreadyRegistered(true)}/>
    

                </div>

               
            </div>
            
        )
    }else{
        return (
            <div className= "container">
              <div className ="form">

                <div>
                <h1>Willkommen zurück!</h1>
                <Input  state={username} setState={setUsername}/>
                <Input  state={password} setState={setPassword}/>
                <Button text="Login" className="loginButton" onClick={() => {

                    login(username,password)
                    
                    
                    

                }}/>
                </div>
          </div>
            </div>
        )
    }

    
}

export default Index


