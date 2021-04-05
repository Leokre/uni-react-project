
import {useState} from 'react'
import {Link} from "react-router-dom"
import Button from "../../components/Button.js"



const AddSession = () => {

const[session, setSession] = useState('')

const  handleSubmit = (e) => {
    e.preventDefault();
    console.log(session);
}


    return (
    <form onSubmit = {handleSubmit} >
      <label> Session Name: </label>
      <input type="text"  required onChange={(e) => setSession(e.target.value)}   />
      <label> Session Thema: </label>
      <input type="text"  required onChange={(e) => setSession(e.target.value)}   />
      <input type="submit" value= "addSession" />

      </form>
    )

}

export default AddSession





