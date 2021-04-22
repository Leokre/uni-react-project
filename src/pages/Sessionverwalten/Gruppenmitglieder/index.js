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
        {id: 5, text : "Leon"},
        {id: 6, text : "Leon"},
        {id: 7, text : "Leon"},
        {id: 8, text : "Leon"},

      ])

    return (

        <body className = "con1">
        <div className="Sidebar1">
     <ul className = "SidebarList1" >    


<h1 className = "rowtitle1">Mein Profil</h1>

{SidebarData.map((val,key) => {
    
    return (
     
<li key = {key} className = "row1" onClick= {() => {window.location.pathname = val.link}}> {""} <div id = "icon">{val.icon}</div>  {""}

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
