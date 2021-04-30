import Participent from './Participent'
import './Gruppenmitglied.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Popup from './Popup.js'
import './Popup.css'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Gruppenverwaltung from '../Gruppenverwaltung/index.js'
import Axios from "axios"
import qs from "qs"
import { ContactSupportOutlined } from '@material-ui/icons';

const Participents = ({currentSession,participents, onDelete}) => {

    

    const [buttonPopup, setButtonPopup ] = useState(false)
    const [toggled, setToggled ] = useState(false)
    const [currentUser, setCurrentUser ] = useState("")
    const [allGroups, setAllGroups ] = useState([])
    const [joinedGroups, setJoinedGroups ] = useState([])

    const onToggle = (participent)=>{
        console.log("onToggle triggered!")
        const log = Axios.create({
            withCredentials: true
          })

          log({
              method: 'post',
              url: process.env.REACT_APP_BACKEND_URL+"/Session/changeRole",
              data: qs.stringify({
                sessionID: currentSession,
                userID: participent.userID
              }),
              headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
            }).then(response => {
                //console.log(response)
                if(!response.data){
                   
                }else{
                   console.log(response.data)
                   switch(participent.role){
                       case 0:
                           participent.role = 1;
                           break;
                        case 1:
                            participent.role = 0;
                            break;
                   }
                   
                   setToggled(!toggled)
                    
                }
              
          })

    }
   
return (
    <div className = "content1"> 




<div className="table-box1">
    <div className="table-row1 table-head1">
        <div className="table-cell1 first-cell1">
            ID
        </div>
        <div className="table-cell1">
           Nutzername
        </div>

        <div className="table-cell1">
           Admin
        </div>
       
        <div className="table-cell1">
           -
        </div>
        <div className="table-cell1 last-cell1">
           -
        </div> 

        </div>
</div>




{participents.map((participent) => (
        
     


<div className="table-box1">
   <div className="table-row1"> 
        <div className="table-cell1 first-cell1"> 
        {console.log(participent)}
            {participent.userID}
        </div>
        <div className="table-cell1">
        {participent.username}
        </div>
       
        <div className="table-cell1">
        <label className = "switch">
            
            <input type = "checkbox" checked = {participent.role > 0} onChange={()=>onToggle(participent)}/* state oben einsetzen und dann benutzen checked = {isToggled} onChange={onToggle}*//>
            <span className = "slider"/>
        
        </label>
        </div>

        <div className="table-cell1">
         <GroupAddIcon className ="icon1" onClick = {() =>
         {
            setCurrentUser(participent.userID)
            var log = Axios.create({
                withCredentials: true
              })
    
              log({
                  method: 'post',
                  url: process.env.REACT_APP_BACKEND_URL+"/Session/getGroups",
                  data: qs.stringify({
                    sessionID: currentSession
                  }),
                  headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                  }
                }).then(response => {
                    //console.log(response)
                    if(!response.data){
                       
                    }else{
                        console.log(response.data)
                        setAllGroups(response.data)
                    }
                  
              })

              
              log = Axios.create({
                withCredentials: true
              })
              console.log("Part user id: " + participent.userID)
              log({
                  method: 'post',
                  url: process.env.REACT_APP_BACKEND_URL+"/Session/getOtherUserGroups",
                  data: qs.stringify({
                    sessionID: currentSession,
                    userID: participent.userID
                  }),
                  headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                  }
                }).then(response => {
                    //console.log(response)
                    if(!response.data){
                       
                    }else{
                        console.log(response.data)
                        setJoinedGroups(response.data)
                        setButtonPopup(true)
                    }
                  
              })

            

         } }/>  
        </div>
       
        <div className="table-cell1 last-cell1">
        <DeleteIcon  className ="icon"onClick = {()=>onDelete(participent.userID)}/>
        </div> 

        </div> 
</div>


))}

<Popup trigger = {buttonPopup} setTrigger ={setButtonPopup}> 
<h1 className = "headerpop">Gruppen verwalten</h1>
<Gruppenverwaltung currentSession={currentSession} currentUser={currentUser} allGroups={allGroups} joinedGroups={joinedGroups}></Gruppenverwaltung></Popup>

    

    </div>
)
    }

    export default Participents