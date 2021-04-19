import Button from "../../../components/Button";
const Participent = ({ participent,onDelete }) => {
    return (
        <div className='participent'>
            <h3>{participent.id} <br></br>{participent.text}
            <Button text = "-" onClick = {()=>onDelete(participent.id)}></Button> </h3> 
            
               
        </div>
    )
}

export default Participent