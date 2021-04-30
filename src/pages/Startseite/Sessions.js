
import { useState } from 'react'
import Button from '../../components/Button.js'
import {Link} from "react-router-dom"
import './Dashboard.css'
import Chat from "../Chat/chatBody/ChatBody.js"




const Sessions = ({session,username}) => {


  





 
    return (
   

        <div>
            <div className="table-box">
    <div className="table-row table-head">
        <div className="table-cell first-cell">
            SessionID
        </div>
        <div className="table-cell">
           Session Name
        </div>
        <div className="table-cell">
           Session Thema
        </div>
        <div className="table-cell">
            Rolle
        </div> 
        <div className="table-cell last-cell">
           -
        </div> 
    </div>


    {session.map((element)  => (

<div key={element.key} className="table-rows" >


    
<div className="table-cell first-cell">
<Link to={{
  pathname: '/Chat',
  state: {
    currentSession: element.id
  }
}}><p>{"S" + element.id}</p></Link>
</div>
<div className="table-cell">

<Link to={{
  pathname: '/Chat',
  state: {
    currentSession: element.id
  }
}}><p>{element.name}</p></Link>
</div>
<div className="table-cell">
<Link to={{
  pathname: '/Chat',
  state: {
    currentSession: element.id
  }
}}><p>{element.thema}</p></Link>
</div>
<div className="table-cell">
<Link to={{
  pathname: '/Chat',
  state: {
    currentSession: element.id
  }
}}><p>{element.rolle}</p></Link>
</div>

<div className="table-cell last-cell">
<Link to={{
  pathname: '/sessionverwalten/gruppenmitglied',
  state: {
    currentSession: element.id
  }
}}><link href="https://fonts.googleapis.com/icon?family=Material+Icons"
rel="stylesheet"></link>
<span className="material-icons">settings</span>  </Link> 


</div>   

</div> 

))}

</div>  
        </div>





 
    )
}

        
export default Sessions




