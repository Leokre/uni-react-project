import React from 'react'
import {Link} from "react-router-dom"
const Confirmation = ({user,password,showpassword}) => {
    if(showpassword){
        return (
            <div className = "form">
                <h1>Herzlich Willkommen, {user}</h1>
                <h1>Dein Passwort lautet {password}</h1>
                <Link to ="/">Home</Link>
            </div>
        )
    }else{
        return (
            <div className = "form">
                <h1>Herzlich Willkommen, {user}</h1>
                <Link to ="/">Home</Link>
            </div>
        )
    }
    
}

export default Confirmation
