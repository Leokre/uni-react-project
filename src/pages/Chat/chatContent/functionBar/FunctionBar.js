import Button from "../../../../components/Button"
import Dropdown from "../../../../components/Dropdown"






const FunctionBar = ({quickReplies,callback}) => {
    return (
        <div>
            <Dropdown title="Schnellantwort" items={quickReplies} callback={callback} autoClose={true}/>
            <Button text="Inforequest"/>
        </div>
    )
}

export default FunctionBar
