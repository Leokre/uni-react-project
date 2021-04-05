const Paragraph = ({text,cssClass,id}) => {
    return (
        <p className={cssClass} id= {id}>{text}</p>
    )
}

export default Paragraph
