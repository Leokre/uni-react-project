import React from 'react'
import './Gruppenmitglied.css'
import {SidebarData} from '../SidebarData'
import Participents from './Participents.js'
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import Axios from "axios"
import qs from "qs"







     
const Sidebar = ({currentSession}) => {

    useEffect(()=>{
        const cd = Axios.create({
            withCredentials: true
          })
          cd({
              method: 'post',
              url: process.env.REACT_APP_BACKEND_URL+"/Session/getUsers",
              data: qs.stringify({
                sessionID: currentSession
              }),
              headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
            }).then(response => {
                console.log(response.data)
                if(!response.data) return
                let users = []
                //check if gruppenID 0 or entry already exists
                //remove host
                response.data.forEach(element => {
                  if(element.Berechtigung == 2) return
                    
                  
                    let isNewUser=true
                    users.forEach(user=>{
                      console.log("user.userID: " + user.userID)
                      console.log("element.UserID: " + element.UserID)
                    console.log(user)
                      if(user.userID == element.UserID){
                        console.log("Match found!")
                        console.log(user)
                        user.groups.push(element.GruppenID)  
                        if(element.Berechtigung > user.role) user.role = element.Berechtigung
                        isNewUser = false
                      }
                    })
                    if(!isNewUser) return

                    
                    let groups = []
                    let newUser = {   userID: element.UserID,
                      username: element.Username,
                      role : element.Berechtigung,
                      groups: groups       
                  }

                    
                    groups.push(element.GruppenID)
                    users.push(newUser)

                    console.log("New User!")
                    console.log("userID: " + element.UserID)
                    console.log("username: " + element.Username)
                    console.log("role: " + element.Berechtigung)
                    console.log("groups: " + groups)

                    
                });
                if(users) setParticipents(users)
                //console.log("InvCode: response.data.InvitationCode")
                //setCode(response.data.InvitationCode)
              
          })
      },[])

      


    const deleteParticipent = (id) => {
        setParticipents(participents.filter((participent)=> participent.id !== id))
      }
  
      
      

    const [participents, setParticipents] = useState ([
        {userID: 1, username : "Diyan"},
        {userID: 2, username : "Elyas"},
        {userID: 3, username : "Aman"},
        {userID: 4, username : "Leon"},
        {userID: 5, username : "Leon"},
        {userID: 6, username : "Leon"},
        {userID: 7, username : "Leon"},
        {userID: 8, username : "Leon"},

      ])

    return (

        <body className = "con1">
        <div className="Sidebar1">
     <ul className = "SidebarList1" >    


<h1 className = "rowtitle1">Session: S{currentSession}</h1>
{SidebarData.map((val,key) => {
    
    return (
     
<Link to={{
            pathname: val.link,
            state: {
            currentSession: currentSession
            }
          }}>
<li key = {key} className = "row1" > {""} <div id = "icon">{val.icon}</div>  {""}

<div id = "title">{val.title}</div>

 </li> 
 </Link>
    );
})
    }

</ul>   

        </div>

  
        <div className = "content2">











        <Participents currentSession = {currentSession} participents = {participents} onDelete ={deleteParticipent}/>





</div>


        </body>





    )
}

export default Sidebar;
