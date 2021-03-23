const TextArea = ({cssClass,maxlength,readonly,resizable,columns,rows,text}) => {
    return <textarea style={{resize: resizable ? "both" : "none" }} name="" id="" cols={columns} rows={rows} readOnly={readonly}>{text}</textarea>
}

TextArea.defaultProps = {
    readonly: false,
    resizable: false,
    cssClass: "textarea"
}

export default TextArea
