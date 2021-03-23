

const Input = ({type,cssClass,state,setState}) => {
    
    
    return <input type={type} value={state} onInput={i => setState(i.target.value)}/>
    
}

Input.defaultProps = {
    cssClass: "input"
}



export default Input
