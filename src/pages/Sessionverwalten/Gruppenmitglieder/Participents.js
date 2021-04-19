import Participent from './Participent'

const Participents = ({participents, onDelete}) => {
return (
    <>
    {participents.map((participent) => (
        <Participent key= {participent.id} participent={participent} onDelete ={onDelete} />
    ))}
    </>
)
    }

    export default Participents