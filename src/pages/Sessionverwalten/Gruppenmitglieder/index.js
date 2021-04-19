import React from 'react'
import './Gruppenmitglied.css'
import {SidebarData} from '../SidebarData'
import Participents from './Participents.js'
import {useState} from 'react'








     
const Sidebar = () => {


    const deleteParticipent = (id) => {
        setParticipents(participents.filter((participent)=> participent.id !== id))
      }
  
  

    const [participents, setParticipents] = useState ([
        {id: 1, text : "Diyan"},
        {id: 2, text : "Elyas"},
        {id: 3, text : "Aman"},
        {id: 4, text : "Leon"},
      ])

    return (

        <body className = "con">
        <div className="Sidebar">
     <ul className = "SidebarList" >    


<h1 className = "rowtitle ">Mein Profil</h1>

{SidebarData.map((val,key) => {
    
    return (
     
<li key = {key} className = "row" onClick= {() => {window.location.pathname = val.link}}> {""} <div id = "icon">{val.icon}</div>  {""}

<div id = "title">{val.title}</div>

 </li> 
    );
})
    }

</ul>   

        </div>

  
        <div className = "content2">

        <Participents participents = {participents} onDelete ={deleteParticipent}/>
</div>


        </body>
    )
}

export default Sidebar;
