import React from 'react'
import './Gruppenerstellen.css'
import {SidebarData} from '../SidebarData'
import Gruppen from './Gruppen.js'
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import Axios from "axios"
import qs from "qs"







     
const Sidebar = ({currentSession}) => {

   
      


    const deleteGruppe = (id) => {
        setGruppen(gruppen.filter((gruppe)=> gruppe.id !== id))
      }
  
      
      

    const [gruppen, setGruppen] = useState ([
        {userID: 1, name : "BA1 Gruppe"},
        {userID: 2, name : "AP2 Gruppe"},
      

      ])

    return (

        <body className = "con1">
        <div className="Sidebar1">
     <ul className = "SidebarList1" >    


<h1 className = "rowtitle1">Session: S{currentSession}</h1>
{SidebarData.map((val,key) => {
    
    return (
     

<li key = {key} className = "row1" > {""} <div id = "icon">{val.icon}</div>  {""}

<div id = "title">{val.title}</div>

 </li> 

    );
})
    }

</ul>   

        </div>

  
        <div className = "content2">











        <Gruppen currentSession = {currentSession} gruppen = {gruppen} onDelete ={deleteGruppe}/>





</div>


        </body>





    )
}

export default Sidebar;
