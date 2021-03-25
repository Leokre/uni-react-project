import Group from "./Group"
import {useState} from "react"

const GroupList = ({onGroupClick}) => {
    const [groups,setGroups] = useState([{identifier:"Alle Gruppen", messageCounter: 33},{identifier:"Gruppe 1", messageCounter: 2}
    ,{identifier:"Gruppe 2", messageCounter: 6},{identifier:"Gruppe 3", messageCounter: 4}])

    let i=0
    return (
        <>
            {groups.map((group) => (
                <Group key={i++} groupIdentifier={group.identifier} newMessageCounter={group.messageCounter} onGroupClick={onGroupClick}/>
            ))}
        </>
    )
}

export default GroupList
