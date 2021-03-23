

const Input = ({type,text,cssClass,input,setInput}) => {
    
    
    return (
        <input type={type} value={input} onInput={i => setInput(i.target.value)}/>
    )
}

Input.defaultProps = {
    text: "",
    cssClass: "input"
}



export default Input
