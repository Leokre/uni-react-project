import Button from "../../components/Button";
import React from 'react'
import {useState} from 'react'
import {Link} from "react-router-dom"
import '.././Login/Login.css'
import Input from "../../components/Input";

const SupportSessionBeitreten  = ({onAdd}) => {
const[sessionID,setID] = useState(null)
const[password,setpassword] = useState('')
//const[sessubmitsion,setsubmitSession] = useState(false)





const onSubmit = (e)=>{
e.preventDefault()

if(!sessionID){
   
    alert('Bitte geben Sie ein Thema ein!' );

    return
} 
alert('SessionID:'+ sessionID)

alert('  Session :'+ password)



 setID('')
 setpassword('')
 //setsubmitSession(false)
    


}


    return (

        <div className = "container">
           
           <form>

               <div className = "form-group">
                <label>SessionID</label>
                <Input type ="text" placeholder = "Add-SessionID"  value = {sessionID} 
                onChange={(e)=> setID(e.target.value)} />
                </div>
        
        
          
                <div className = "form-group" >
                <label>Name der Session</label>
                <Input type ="text"  placeholder = "Add-password"  
                value = {password} 
                onChange={(e)=> setpassword(e.target.value)}  />

</div>

                       
        
            <Link to="/JoinSession/success">
            <Button text="Session Beitreten" cssClass="btn" onClick={()=> onAdd(sessionID,password)}/>
            </Link>
            

            </form>
        
        </div>




    )
}

export default  SupportSessionBeitreten
