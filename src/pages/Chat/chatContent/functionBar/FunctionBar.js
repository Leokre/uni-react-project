import Button from "../../../../components/Button"
import Dropdown from "./Dropdown"
import '../chatContent.css'
import Popup from '../Popup.js'
import '../chatContent.css'
import PopupAntwort from '../PopupAntworten.js'
import { useState } from 'react';









const FunctionBar = ({quickReplies,callback}) => {
    
    const [buttonPopup, setButtonPopup ] = useState(false)
    const [buttonPopupA, setButtonPopupA ] = useState(false)
    
    return (
        <div className = "functionbar">
            <Button  cssClass = "popbutton2"onClick = {() => setButtonPopupA(true)} text ="Schnellantwort"/>
            <Popup trigger = {buttonPopupA} setTrigger ={setButtonPopupA}> <Dropdown title="Schnellantwort" items={quickReplies} callback={callback} autoClose={true} autoclose ={setButtonPopupA}/></Popup>
           


           
            <Button cssClass = "popbutton1"onClick = {() => setButtonPopup(true)}text="Inforequest"/>
            <Popup trigger = {buttonPopup} setTrigger ={setButtonPopup}>

<h1>Inforequest </h1>
<h2>test</h2>
            </Popup>


        </div>
    )
}

export default FunctionBar
