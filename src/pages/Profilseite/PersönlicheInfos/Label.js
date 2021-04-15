
import { useState } from 'react'
import Button from "../../../components/Button";
import './Profilseite.css'
import Input from "../../../components/Input";






const Label = () => {
    return (
       
            


            <div className = "content2"> 






<html>


        <h2 className = "h2">Persönliche Informationen</h2>
        <h1 className ="h1">Vorname</h1>
        <Input type ="text" placeholder = "Add-Antwort"/>
         <h1 className ="h1">Nachname</h1>
        <Input/>
        <h1 className ="h1">Email</h1>
        <Input/>
     
  
<Button text="Speichern" cssClass="btn"/>

</html>

</div>




     
    )
}

export default Label
