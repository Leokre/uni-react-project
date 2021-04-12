import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState} from "react";
import {Link} from "react-router-dom"
import {register} from "../../Helpers"
import './Login.css'


const Register = ({}) => {
    const [username, setUsername] = useState("Username");
    const [password, setPassword] = useState("Password");
    const backendURL = process.env.REACT_APP_BACKEND_URL

    
    
    return (
        <div class = "container">
           
<form>

<h1>Registrierung</h1>

            <div class= "form-group">
                <label>Nutzername</label>
                <Input  state={username} setState={setUsername}/>

                </div>
                <div class= "form-group">
                <label>Passwort</label>
                <Input state={password} setState={setPassword}/>

                </div>


           

                <Button text="Register" Class="btn" onClick={()=>register(username,password,backendURL)} />

                </form>
                
        </div>
    )
}

export default Register
