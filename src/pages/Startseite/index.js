import React from 'react'
import Session from './Sessions.js'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'



const index = () => {
    return (
        <div>
  
    <Session/>

    <div className="container">



<Link to = "/addSession">    <button className="btn1" >  Session erstellen </button>  </Link>
<Link to = "/JoinSession">   <button className="btn1" >  Session beitreten </button>  </Link>


  
  </div>
      
        </div>
    )
}

export default index
