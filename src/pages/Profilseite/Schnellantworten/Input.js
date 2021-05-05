import { useState ,useEffect} from 'react'
import Button from "../../../components/Button";
import './Schnellantworten.css'
import Input from "../../../components/Input";
import Axios from "axios"
import qs from "qs"



const SchnellAntwort   = ({quickReplies}) => {
  const[Antwort1,setAntwort1] = useState("")
  const[Antwort2,setAntwort2] = useState("")
  const[Antwort3,setAntwort3] = useState("")
  const[Antwort4,setAntwort4] = useState("")
  const[Antwort5,setAntwort5] = useState("")
  console.log("quickReplies: " + quickReplies)


  const setQuickReplies = (newReplies)=>{
    const rp = Axios.create({
      withCredentials: true
    })

    rp({
        method: 'post',
        url: process.env.REACT_APP_BACKEND_URL+"/setQuickReplies",
        data: qs.stringify({
          quickReplies: newReplies
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(response => {
          //console.log(response)
          if(!response.data){
             
          }else{
             
              
             if(response.data.msg == "ERR_INPUT_EMPTY") alert("Bitte geben sie etwas ein!")
             
             
              

              
          }
        
    })
  }



  useEffect(()=>{
    if(!quickReplies) return
    /*
    setReplies(quickReplies)
    console.log("replies: " + replies)
    */
    setAntwort1(quickReplies[0].value)
    setAntwort2(quickReplies[1].value)
    setAntwort3(quickReplies[2].value)
    setAntwort4(quickReplies[3].value)
    setAntwort5(quickReplies[4].value)
    
  },[quickReplies])
  
  
 

  const onSubmit = ()=>{
  
  
  const replies = Antwort1 + ";" + Antwort2 + ";" + Antwort3 + ";" + Antwort4 + ";" + Antwort5
  setQuickReplies(replies)

  window.location.reload();
  
  }
   return (

          <div className = "content2"> 


          <html>
        
                  <h2 className = "h2">Schnellantworten verwalten</h2>
                  <h1 className ="h1">1.Schnellantwort</h1>

                  <Input type ="text" state = {Antwort1} 
                  setState={setAntwort1}/>
                  <h1 className ="h1">2.Schnellantwort</h1>
                  <Input type ="text"   state = {Antwort2} 
                  setState={setAntwort2}/>
                  <h1 className ="h1">3.Schnellantwort</h1>
                  <Input type ="text"  state = {Antwort3} 
                  setState={setAntwort3}/>
                  <h1 className ="h1">4.Schnellantwort</h1>
                  <Input type ="text"   state = {Antwort4} 
                  setState={setAntwort4}/>
                  <h1 className ="h1">5.Schnellantwort</h1>
                  <Input type ="text"   state = {Antwort5} 
                  setState={setAntwort5}/>
            
       <Button text="Speichern" cssClass="btn" onClick={()=> onSubmit()}/>

       </html>
       
  
    </div>
      )
  }
  
  export default  SchnellAntwort