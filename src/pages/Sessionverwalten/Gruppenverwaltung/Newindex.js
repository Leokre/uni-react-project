
import Popup from '../Gruppenmitglieder/Popup.js'

import { useState } from 'react';
import Button from "../../../components/Button";









const Newindex = () => {
    
    
    const [buttonPopup, setButtonPopup ] = useState(false)
    
    return (
        <div className = "">
            <Button  cssClass = "popbutton2"onClick = {() => setButtonPopup(true)} text ="Schnellantwort"/>


            <Popup trigger = {buttonPopup} setTrigger ={setButtonPopup}> HIIIII</Popup>
           


        


        </div>
    )
}

export default Newindex
