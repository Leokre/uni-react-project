import Participent from './Participent'
import './Gruppenmitglied.css'
import DeleteIcon from '@material-ui/icons/Delete';

const Participents = ({participents, onDelete}) => {


   
return (
    <div className = "content1"> 




<div className="table-box1">
    <div className="table-row1 table-head1">
        <div className="table-cell1 first-cell1">
            ID
        </div>
        <div className="table-cell1">
           Nutzername
        </div>

        <div className="table-cell1">
           Admin
        </div>
       
       
        <div className="table-cell1 last-cell1">
           -
        </div> 

        </div>
</div>




{participents.map((participent) => (
        
     


<div className="table-box1">
    <div className="table-row1">
        <div className="table-cell1 first-cell1">
            {participent.id}
        </div>
        <div className="table-cell1">
        {participent.text}
        </div>
       
        <div className="table-cell1">
        <label className = "switch">
            
            <input type = "checkbox" /*checked = {isToggled} onChange={onToggle}*//>
            <span className = "slider"/>
        
        </label>
        </div>
       
       
        <div className="table-cell1 last-cell1">
        <DeleteIcon  className ="icon"onClick = {()=>onDelete(participent.id)}/>
        </div> 

        </div>
</div>


))}



    

    </div>
)
    }

    export default Participents