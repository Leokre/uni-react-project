import Button from "../../components/Button"

const FunctionBar = ({callback}) => {
    return (
        <div>
            <Button text="Schnellantwort" className="chatFunctionBarButton"/>
            <Button text="Inforequest" className="chatFunctionBarButton"/>
            <Button text="Send" className="sendMessageButton" onClick={() => callback()}/>
        </div>
    )
}

export default FunctionBar
