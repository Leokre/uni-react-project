
import './Gruppenerstellen.css'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "../../../components/Button";


const Gruppen = ({currentSession,gruppen, onDelete}) => {

    

   
  
   
return (
    <div className = "content1"> 

<div className="ct"><Button cssClass ="addgroupbutton" text="Gruppe hinzufügen">Gruppe hinzufügen</Button> </div>


<div className="table-box1">
    <div className="table-row1 table-head1">
        <div className="table-cell1 first-cell1">
            Gruppen Nr.
        </div>
      
        <div className="table-cell1 ">
           Gruppen Name
        </div> 

        <div className="table-cell1 last-cell1">
           -
        </div> 

        </div>
</div>



{gruppen.map((gruppe) => (
        
     


<div className="table-box1">
   <div className="table-row1"> 
        <div className="table-cell1 first-cell1"> 
        {console.log(gruppe)}
            {gruppe.userID}
        </div>
        <div className="table-cell1">
        {gruppe.name}
        </div>
       
     
       
       
        <div className="table-cell1 last-cell1">
        <DeleteIcon  className ="icon"onClick = {()=>onDelete(gruppe.userID)}/>
        </div> 

        </div> 
</div>


))}





    

    </div>
)
    }

    export default Gruppen