import ChatMessage from "./ChatMessage"
import Input from "../../components/Input"
import {useState} from "react"
import Button from "../../components/Button"
import FunctionBar from "./FunctionBar"

const ChatWindow = ({chatLog,callback}) => {
    const [message, setMessage] = useState("");
    var currentUser = "Yourself" //Temporary, grab current user later
    let i=0
    
    function sendInputMessage(message){
        callback(currentUser,message)
    }


    return (
        <>
            
            {chatLog.map((chatMessage) => (
                <ChatMessage key={i++} username={chatMessage.username} message={chatMessage.message} picture={chatMessage.picture} />
            ))}

            <FunctionBar callback={()=> sendInputMessage(message)}/>
            <Input type="text" cssClass="chatInputBox" state={message} setState={setMessage} onkeydown={sendInputMessage}/>         
            

        </>
    )
}

export default ChatWindow
