
import {useState} from 'react'
import {Link} from "react-router-dom"
import Button from "../../components/Button.js"
import '.././Login/Login.css'
import Input from "../../components/Input";
import Bild from './Add.png'



const AddSession = () => {

const[session, setSession] = useState('')

const  handleSubmit = (e) => {
    e.preventDefault();
    console.log(session);
}


    return (

      <div className = "container">


    <form onSubmit = {handleSubmit} >
    <img src = {Bild} className="Bild"></img>
      <div className = "form-group">
      <label> Session Name: </label>
      <Input type="text"  required onChange={(e) => setSession(e.target.value)}   />
      </div>

       <div className = "form-group">
      <label> Session Thema: </label>
      <Input type="text"  required onChange={(e) => setSession(e.target.value)}   />
      </div>
      <Button text = "Add Session"class="btn" type="submit" value= "addSession" />

      </form>

      </div>
    )

}

export default AddSession





