import React from 'react'
var chatboxing



const test = () => {
    return (
        <div>
            

        
            if (this.state.chat.length == 0) {

ausgabe =    <div className = "chatbox">Keine Nachrichten vorhanden</div>



}

else {
ausgabe =    this.state.chat.map((itm, index) => {
return (
<ChatItem
animationDelay={index + 2}
key={itm.key}
type={itm.type}
msg={itm.msg}
image={itm.image}
username={itm.username}
time={itm.time}
/>
 );
 })
 
}

        </div>
    )
}

export default test
