

const Input = ({type,cssClass,input,setInput}) => {
    
    
    return (
        <input type={type} value={input} onInput={i => setInput(i.target.value)}/>
    )
}

Input.defaultProps = {
    cssClass: "input"
}



export default Input
