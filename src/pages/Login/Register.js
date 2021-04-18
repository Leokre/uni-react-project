import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState} from "react";
import {Link} from "react-router-dom"
import {register} from "../../Helpers"
import './Login.css'
import Bild from './Login.png'


const Register = ({}) => {
    const [username, setUsername] = useState("Username");
    const [password, setPassword] = useState("Password");
    const backendURL = process.env.REACT_APP_BACKEND_URL

    
    
    return (
<div>


        <div className = "container">


           
<div className ="form">
<img src = {Bild} className="Bild"></img>
<h1>Registrierung</h1>

            <div className= "form-group">
                <label>Nutzername</label>
                <Input  state={username} setState={setUsername}/>

                </div>
                <div className= "form-group">
                <label>Passwort</label>
                <Input state={password} setState={setPassword}/>

                </div>


           

                <Button text="Register" cssClass="btn" onClick={()=>register(username,password,backendURL)} />

                </div>
                
        </div>
        </div>
    )
}

export default Register
