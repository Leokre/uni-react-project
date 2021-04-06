import React from 'react'
import Button from "../../components/Button";
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
import {useState} from 'react'
import SchnellAntwort from "./Schnellantwort"
import Gruppe from "./GruppeErstellen"
import Participents from "./Participents"



const SessionVerwalten = () => {
   
    let Antwort = ""
    function callbackThema(a){
       
        Antwort = a
        console.log(a)
      
      }


      const [participents, setParticipents] = useState ([
        {id: 1, text : "Diyan"},
        {id: 2, text : "Elyas"},
        {id: 3, text : "Aman"},
        {id: 4, text : "Leon"},
      ])
    
    
        const deleteParticipent = (id) => {
          setParticipents(participents.filter((participent)=> participent.id !== id))
        }
    
        
         
          
          
          
          <Participents participents = {participents} onDelete ={deleteParticipent}/>
    
     
    
    


return (
    <div>
            <Router>
            <h1>Session Verwalten</h1> 
            <Button text="Rechtevergabe" cssClass= "btn"/>
            <br></br>
            <br></br>
            <Link to= '/Gruppe'>
            <Button text="Gruppenverwaltung" cssClass= "btn"/>
             </Link>

             <Route path="/Gruppe" exact render={(props)=>(<>
      <br></br>
        <Gruppe onAdd={callbackThema}/>
    </> )}></Route>
             
            <br></br>
            <br></br>
            <Button text="Einladungslink generieren" cssClass= "btn"/>
            <br></br>
            <br></br>
            <Link to= '/Schnellantworten'>
            <Button text="Schnellantworten Verwalten"  cssClass= "btn" />
            </Link>

            
            <Route path="/Schnellantworten" exact render={(props)=>(<>
      <br></br>
        <SchnellAntwort onAdd={callbackThema}/>
        <SchnellAntwort onAdd={callbackThema}/>
        <SchnellAntwort onAdd={callbackThema}/>
        <SchnellAntwort onAdd={callbackThema}/>
        <SchnellAntwort onAdd={callbackThema}/>

    </> )}></Route>

            <br></br>
            <br></br>
            <br></br>
            <Button text="Änderungen Übernehmen" cssClass= "btn"/>

            <Participents participents = {participents} onDelete ={deleteParticipent}/>
            </Router>
    
    </div>
    
)
}
export default SessionVerwalten

