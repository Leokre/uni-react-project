import React from 'react'
import './Einladungslink.css'
import {SidebarData} from '../SidebarData'
import Einladungslink from'./Einladungslink'
import {Link} from "react-router-dom"

const Sidebar = ({currentSession}) => {
    return (

        <body className = "con">
        <div className="Sidebar">
     <ul className = "SidebarList" >    


<h1 className = "rowtitle ">Session: S{currentSession}</h1>

{SidebarData.map((val,key) => {
    return (
     
     
<Link to={{
            pathname: val.link,
            state: {
              currentSession: currentSession
            }
          }}>
<li key = {key} className = "row" > {""} <div id = "icon">{val.icon}</div>  {""}

<div id = "title">{val.title}</div>

 </li> 
 </Link>
    );
})
    }

</ul>   

        </div>

  
    
<Einladungslink currentSession = {currentSession}/>

        </body>
    )
}

export default Sidebar;
