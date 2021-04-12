
import { useState } from 'react'
import Button from '../../components/Button.js'
import {Link} from "react-router-dom"
import './Dashboard.css'





const Sessions = () => {


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

const addSession = (session) => {
setSession([...session, {id:'23',thema:session.thema,rolle:'453',datum:'34',extra:session.extra}])

}
 
    return (
   

        <div>
            <div class="table-box">
    <div class="table-row table-head">
        <div class="table-cell first-cell">
            SessionID
        </div>
        <div class="table-cell">
           Session Name
        </div>
        <div class="table-cell">
            Rolle
        </div> 
        <div class="table-cell">
           Erstellungsdatum
        </div> 
        <div class="table-cell last-cell">
           -
        </div> 
    </div>


    {session.map((element)  => (

    <div class="table-row">

<div class="table-cell first-cell">
    <p>{element.id}</p>
</div>
<div class="table-cell">
    <p>{element.thema}</p>
</div>
<div class="table-cell">
    <p>{element.rolle}</p>
</div>
<div class="table-cell">
    <p>{element.datum}</p>
</div>

<div class="table-cell last-cell">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>



<Link to = "/Sessionverwalten">   <span class="material-icons">settings</span>  </Link> 

</div>   

</div> 

))}

</div>  
        </div>





 
    )
}

        
export default Sessions




