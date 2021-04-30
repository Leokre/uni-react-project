

const Input = ({type,cssClass,state,setState,onkeydown,disable}) => {
    function handleKeyPress(e){
        if(onkeydown!= undefined && e.key == "Enter" && state != ""){
            onkeydown(state)
            setState('')
        }
    }
    
    
    return <input className="form-control" type={type} value={state} onInput={e => setState(e.target.value)} onKeyDown={handleKeyPress} disabled = {disable?  "disabled" : ""}/>
    
}

Input.defaultProps = {
    cssClass: "input"
}



export default Input
