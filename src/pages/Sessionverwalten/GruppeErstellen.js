import { useState } from 'react'
import Button from "../../components/Button";

const Gruppe   = ({onAdd}) => {
  const[GruppeE,setGruppeE] = useState(null)
  
  
  
  const onSubmit = ()=>{
  
  
  if(!GruppeE){
     
      alert('Bitte geben Sie eine Gruppe ein!' );
  
      return
  } 
  onAdd(GruppeE)
  alert('Gruppe:'+ GruppeE)
  setGruppeE('')
  
  }
   return (
          <div>
               
                  <label>Gruppe</label>
                  <input type ="text" placeholder = "Add-Gruppe"  value = {GruppeE} 
                  onChange={(e)=> setGruppeE(e.target.value)} />
            
       <Button text="Gruppe hinzufügen" cssClass="btn" onClick={()=> onSubmit()}/>
  
    </div>
      )
  }
  
  export default  Gruppe