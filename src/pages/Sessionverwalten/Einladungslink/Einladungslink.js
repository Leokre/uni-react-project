import React from 'react'
import uuid from 'react-uuid'
import Input from "../../../components/Input"
import Button from "../../../components/Button";
import {useState, useEffect} from "react"
import Axios from "axios"
import qs from "qs"



const Einladungslink = ({currentSession}) => {
    const [code, setCode] = useState("");

    useEffect(()=>{
        console.log("currentSession: " + currentSession)
        const cd = Axios.create({
            withCredentials: true
          })
          cd({
              method: 'post',
              url: process.env.REACT_APP_BACKEND_URL+"/getInvCode",
              data: qs.stringify({
                sessionID: currentSession
              }),
              headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
            }).then(response => {
                console.log("resp: " + response)
                if(!response.data) return
                console.log("InvCode: response.data.InvitationCode")
                setCode(response.data.InvitationCode)
              
          })

    },[])


    return (
    
        <div className="content2">

            <html>
      
        <h1 className ="h1">Einladungscode</h1>
        <Input  state={code} setState={setCode} disable={true}/>
     
  <br></br>
<Button text="Einladungscode generieren" className ="btn" onClick={()=>{
const cd = Axios.create({
    withCredentials: true
  })
  cd({
      method: 'post',
      url: process.env.REACT_APP_BACKEND_URL+"/genInvCode",
      data: qs.stringify({
        sessionID: currentSession
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(response => {
        if(response.data.msg == "NEED_ADMIN_ACCESS") return alert ("NEED_ADMIN_ACCESS")
        setCode(response.data.InvitationCode)

            
        
      
  })

}}/>

</html>
        </div>
            
    )
}

export default Einladungslink
