import Button from "../../components/Button";
import Input from "../../components/Input";
import {useState,setState} from "react";
import {Link} from "react-router-dom"
import Axios from "axios"
import qs from "qs"
import {register} from "../../Helpers"
import "./Login.css"
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
                    //console.log(response.data)
                    //console.log(response.data.accessToken)
                    setloggedIn(true);
                    //console.log(loggedIn)
                    window.location.reload();

                    
                }
              
          }).then(setloggedIn(true))
      }

     
      

    if(!alreadyRegistered){
        return (
            <div class = "container">
                
<form >

                <h1>Willkommen auf unserer Plattform</h1>
                <h4>Wie dürfen wir sie nennen?</h4>
                <Input  state={username} setState={setUsername}/>
                
               
                <Button text="Login" className="loginButton" onClick={() => {
                   register(username,defaultPassword,backendURL)
                   setTimeout(()=>{login(username,defaultPassword); }, 100)
               



                }}/>
              <br></br>  <br></br> 
              <Button text="Bereits Mitglied?" className="alreadyRegisteredButton" onClick={e => setAlreadyRegistered(true)}/>
    

                </form>

               
            </div>
            
        )
    }else{
        return (
            <div className= "container">

                <form>
                <h1>Willkommen zurück!</h1>
                <Input  state={username} setState={setUsername}/>
                <Input  state={password} setState={setPassword}/>
                <Button text="Login" className="loginButton" onClick={() => {

                    login(username,password)
                    
                    


                }}/>
          </form>
            </div>
        )
    }

    
}

export default Index


