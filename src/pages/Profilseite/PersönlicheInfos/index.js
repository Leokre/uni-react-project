import React from 'react'
import Sidebar from '../NeueSidebar'
import Profildaten from './Label.js'
import './Profilseite.css'
import {SidebarData} from '../SidebarData'






const index = () => {
    return (
        <div>







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

      
    <Profildaten/>

        </body>

</div>
    )
}

export default index
