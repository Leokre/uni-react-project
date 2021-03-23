

const Input = ({type,cssClass,state,setState}) => {
    
    
    
    return <input type={type} value={state} onInput={e => setState(e.target.value)}/>
    
}

Input.defaultProps = {
    cssClass: "input"
}



export default Input
