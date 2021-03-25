import Paragraph from "../../components/Paragraph"
import TextArea from "../../components/TextArea"

const Group = ({groupIdentifier,newMessageCounter,onGroupClick}) => {
    return (
        <div onClick={()=>onGroupClick(groupIdentifier,1)}>
            <Paragraph cssClass="chatGroupIdentifier" text={groupIdentifier}/>
            <TextArea cssClass="chatNewMessageCounter" maxlength="1" readonly={true} resizable={false} columns="1" rows="1" text={newMessageCounter}/>
        </div>
    )
}

export default Group
