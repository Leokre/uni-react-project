import { useState } from 'react'
import Button from "../../components/Button";

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
          <div>
               
                  <label>SchnellAntwort</label>
                  <input type ="text" placeholder = "Add-Antwort"  value = {Antwort} 
                  onChange={(e)=> setAntwort(e.target.value)} />
            
       <Button text="SchnellAntwort hinzufügen" cssClass="btn" onClick={()=> onSubmit()}/>
  
    </div>
      )
  }
  
  export default  SchnellAntwort