import React from 'react'
import './Einladungslink.css'
import {SidebarData} from '../SidebarData'
import Einladungslink from'./Einladungslink'


const Sidebar = () => {
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

       
</div>

<Einladungslink/>

        </body>
    )
}

export default Sidebar;
