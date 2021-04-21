import React from 'react'
import './Popup.css'
import CloseIcon from '@material-ui/icons/Close';

function Popup (props) {
    return  (props.trigger) ? (
        <div className = "popup">
            <div className = "popup-inner">
            <button onClick = { () => props.setTrigger(false)} className ="close-btn"><CloseIcon/></button>
            {props.children}
            </div>
            
        </div>
    ): "";

}

export default Popup
