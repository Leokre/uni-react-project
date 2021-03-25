import ChatMessage from "./ChatMessage"
import ChatWindow from "./ChatWindow"
import  {useState} from "react"
import GroupList from "./GroupList"

const Index = () => {
    const [chatLog,setChatLog] = useState([{username:"User1",message:"Message1"},{username:"User2",message:"Message2"},{username:"User3",message:"Message3"}])
    //Get chatLog from backend later on

    function sendMessage(user,message,picture=""){
        setChatLog(chatLog => [...chatLog,{username: user, message: message}])
    }//Temporary, send to backend later, add timestamp

    function onGroupClick(groupIdentifier,sessionID){
        //Get chatLog from backend and deliver. Temporary solution:
        setChatLog([{username:"User1In"+groupIdentifier,message:"Message1"},{username:"User2In"+groupIdentifier,message:"Message2"},{username:"User3In"+groupIdentifier,message:"Message3"}])
    }
    
    return (
        <div>
            <GroupList onGroupClick={onGroupClick}/>
            <ChatWindow chatLog={chatLog} callback={sendMessage}/>
        </div>
    )
}

export default Index
