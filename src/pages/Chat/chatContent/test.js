import React from 'react'
var chatboxing



const test = () => {
    return (
        <div>
            

        

if (this.state.chat.keys(this.state.errors).length == 0) {

chatboxing =  <div className = "chatbox">hi</div>

    } 
    else {
    chatboxing  = this.state.chat.map((itm, index) => {
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
