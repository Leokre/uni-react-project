import React,{useEffect,useState} from 'react'
import Session from './Sessions.js'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Axios from "axios"

const backendURL = process.env.REACT_APP_BACKEND_URL

const getSessions = (stateSetter)=>{

    let sess = []
    let i = 0;
    const log = Axios.create({
        withCredentials: true
      })
      log.get(backendURL +"/getUserSessions").then(response => {
          console.log(response.data)


         response.data.forEach(element => {

               sess.push({
                key: i++,
                id: element.SessionID,
                name: element.SessionName,
                thema: element.SessionThema,
                rolle: (element.Berechtigung == 1)?  "Administrator" : (element.Berechtigung == 2)?  "Host" : "User"
               })
                
               
         });
         stateSetter(sess)


            
            
          
         
          
      })



}

const Index = ({username}) => {
/*
    const [session, setSession] = useState([

        {
        
        id: 'S323',
        thema: 'chill',
        rolle: 'Adminii',
        datum: '15012020',
        extra: 'irgendwas'
        
        },
        
        {
        
            id: 'S323',
            thema: 'chill',
            rolle: 'Adminii',
            datum: '15012020',
            extra: 'irgendwas'
            
            }
        
        
          ])


          */

          const [session, setSession] = useState([])
    useEffect(() => {
        getSessions(setSession)
      }, [])




    return (
        <div>
  
    <Session session={session} username={username}/>

    <div className="container">



<Link to = "/addSession">    <button className="btn1" >  Session erstellen </button>  </Link>
<Link to = "/JoinSession">   <button className="btn1" >  Session beitreten </button>  </Link>


  
  </div>
      
        </div>
    )
}

export default Index
