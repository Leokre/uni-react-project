
import {useState} from 'react'
import {Link} from "react-router-dom"
import Button from "../../components/Button.js"
import '.././Login/Login.css'
import Input from "../../components/Input";
import Bild from './Add.png'
import Axios from "axios"
import qs from "qs"

const backendURL = process.env.REACT_APP_BACKEND_URL


const AddSession = () => {

const[sessionName, setSessionName] = useState('')
const[sessionTopic, setSessionTopic] = useState('')


const  handleSubmit = (e) => {
    e.preventDefault();
    console.log(sessionName);
    console.log(sessionTopic);


    const sess = Axios.create({
      withCredentials: true
    })

    sess({
        method: 'post',
        url: backendURL+"/addSession",
        data: qs.stringify({
          sessionName: sessionName,
          sessionTopic: sessionTopic
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(response => {
          console.log(response)
          if(!response.data){
             console.log("REQUEST FAILED")
          }else{
            
            if(response.data.msg == "NO_SESSION_NAME") alert("Bitte tragen sie einen Sitzungsnamen ein")  
            if(response.data.msg == "NO_SESSION_TOPIC") alert("Bitte tragen sie ein Sitzungsthema ein")  
            if(response.data.msg == "SESSION_CREATE_SUCCESS") alert("Sitzung erfolgreich erstellt!") 
              

              
          }
        
    })


}


    return (

      <div className = "container">


    <form onSubmit = {handleSubmit} >
    <img src = {Bild} className="Bild"></img>
      <div className = "form-group">
      <label> Session Name: </label>

    
      <Input type="text" state={sessionName}  setState={setSessionName}   />
      </div>

       <div className = "form-group">
      <label> Session Thema: </label>
      <Input type="text" state={sessionTopic}  setState={setSessionTopic}   />
      </div>
      <Button text = "Add Session" cssClass="btn" type="submit" value= "addSession" />

      </form>

      </div>
    )

}

export default AddSession





