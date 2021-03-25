

const Input = ({type,cssClass,state,setState,onkeydown}) => {
    function handleKeyPress(e){
        if(onkeydown!= undefined && e.key == "Enter" && state != ""){
            onkeydown(state)
            setState('')
        }
    }
    
    
    return <input type={type} value={state} onInput={e => setState(e.target.value)} onKeyDown={handleKeyPress}/>
    
}

Input.defaultProps = {
    cssClass: "input"
}



export default Input
