import Button from "../../components/Button";
import Input from "../../components/Input";
import {forwardRef, useState,useImperativeHandle} from "react";
import {Link} from "react-router-dom"

const Index = ({callback}) => {
    const [username, setUsername] = useState("Username");
    const [password, setPassword] = useState("Password");
    const [alreadyRegistered, setAlreadyRegistered] = useState(false); 

    if(!alreadyRegistered){
        return (
            <div>
                
                <h1>Willkommen auf unserer Plattform</h1>
                <h4>Wie dürfen wir sie nennen?</h4>
                <Input  state={username} setState={setUsername}/>
                
                
                <Link to="/login/confirmation">
                <Button text="Login" className="loginButton" onClick={e => callback(username,password,alreadyRegistered)}/>
                </Link>
                <Button text="Bereits registriert?" className="alreadyRegisteredButton" onClick={e => setAlreadyRegistered(true)}/>
                
    
            </div>
        )
    }else{
        return (
            <div>
                <h1>Willkommen zurück!</h1>
                <Input  state={username} setState={setUsername}/>
                <Input  state={password} setState={setPassword}/>
                <Link to="/login/confirmation">
                <Button text="Login" className="loginButton" onClick={callback(username,password,alreadyRegistered)}/>
                </Link>
            </div>
        )
    }

    
}

export default Index


