import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState} from "react";
import {Link} from "react-router-dom"
import {register} from "../../Helpers"


const Register = ({}) => {
    const [username, setUsername] = useState("Username");
    const [password, setPassword] = useState("Password");
    const [alreadyRegistered, setAlreadyRegistered] = useState(false);
    const Axios = require("axios")
    const qs = require("qs")
    const backendURL = "http://localhost:5000"
    let success = false;

    
    
    return (
        <div>
            <h1>Registrierung</h1>
                <Input  state={username} setState={setUsername}/>
                <Input  state={password} setState={setPassword}/>
                <Button text="Register" cssClass="btn" onClick={()=>register(username,password,backendURL)} />
                
        </div>
    )
}

export default Register
