import { useState } from 'react'
import Button from "../../../components/Button";
import './Schnellantworten.css'
import Input from "../../../components/Input";


const SchnellAntwort   = ({onAdd}) => {
  const[Antwort,setAntwort] = useState(null)
  
  
  
  const onSubmit = ()=>{
  
  
  if(!Antwort){
     
      alert('Bitte geben Sie eine Antwort ein!' );
  
      return
  } 
  onAdd(Antwort)
  alert('Antwort:'+ Antwort)
  setAntwort('')
  
  }
   return (

          <div className = "content2"> 



          <html>
                  <h2 className = "h2">Schnellantworten verwalten</h2>
                  <h1 className ="h1">1.Schnellantwort</h1>
                  <Input type ="text" placeholder = "Add-Antwort"  value = {Antwort} 
                  onChange={(e)=> setAntwort(e.target.value)}/>
                   <h1 className ="h1">2.Schnellantwort</h1>
                  <Input/>
                  <h1 className ="h1">3.Schnellantwort</h1>
                  <Input/>
                  <h1 className ="h1">4.Schnellantwort</h1>
                  <Input/>
                  <h1 className ="h1">5.Schnellantwort</h1>
                  <Input/>
            
       <Button text="Speichern" cssClass="btn" onClick={()=> onSubmit()}/>

       </html>
  
    </div>
      )
  }
  
  export default  SchnellAntwort