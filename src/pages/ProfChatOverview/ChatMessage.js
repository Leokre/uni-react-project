import Button from "../../components/Button"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import Paragraph from "../../components/Paragraph"
import defaultPicture from "../../resources/default-profile-picture.jpeg"

const ChatMessage = ({username,message,picture}) => {
    return (
        <>
            <img src={defaultPicture}/>
            <Paragraph text={username} cssClass="msgUsername"/>
            <TextArea className="msgText" maxlength="1028" readonly={true} resizable={false} text={message}/>
        </>
    )
}

ChatMessage.defaultProps = {
    picture : {defaultPicture} //Doesnt work
}

export default ChatMessage
