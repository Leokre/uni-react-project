import ChatMessage from "./ChatMessage"
import Input from "../../components/Input"
import {useState} from "react"
import Button from "../../components/Button"

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
            <Input type="text" cssClass="chatInputBox" state={message} setState={setMessage} onkeydown={sendInputMessage}/>
            <Button text="Send" className="sendMessageButton" onClick={() => callback(currentUser,message)}/>

        </>
    )
}

export default ChatWindow
