import Button from "../../components/Button";
import React from 'react'
import {useState} from 'react'
import {Link,Redirect} from "react-router-dom"
import '.././Login/Login.css'
import Input from "../../components/Input";
import Bild from './Join.png'
import Axios from "axios"
import qs from "qs"

const backendURL = process.env.REACT_APP_BACKEND_URL
const SupportSessionBeitreten  = () => {
const[inviteCode,setinviteCode] = useState("")
//const[sessubmitsion,setsubmitSession] = useState(false)



const joinSess = async (inviteCode)=>{

    console.log("Joining...")
    const join = Axios.create({
        withCredentials: true
      })

      join({
          method: 'post',
          url: backendURL+"/Session/addUser",
          data: qs.stringify({
            inviteCode: inviteCode
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(response => {
            console.log(response)
            if(!response.data){
               
            }else{
               
                console.log("JoinResponse: " + response.data)

                
            }
          
      })
}

const onSubmit = (e)=>{
e.preventDefault()

if(!inviteCode){
   
    alert('Bitte geben Sie einen Einladungscode ein!' );

    return
} 
//alert('inviteCode:'+ inviteCode)

joinSess(inviteCode)

setinviteCode('')







 //setsubmitSession(false)
    


}


    return (

        <form className = "container">
           
           <div className="form">
           <img src = {Bild} className="Bild"></img>
               <div className = "form-group">
                <label>Einladungscode</label>
                <Input type ="text" placeholder = "Add-SessionID"  value = {inviteCode} 
                state={inviteCode}  setState={setinviteCode} />
                </div>
        
        
          
        



                       
        
            
            <Button text="Session Beitreten" cssClass="btn" onClick={onSubmit}/>
            
            

            </div>
        
        </form>




    )
}

export default  SupportSessionBeitreten
