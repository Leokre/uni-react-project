import PropTypes from 'prop-types';

const Button = ({color,text,cssClass,onClick}) => {
    return (
    
    
    <button 
    style={{backgroundColor: color}} 
    className={cssClass}
    onClick = {onClick}
    >{text}
    </button>
        
        
        
           )
}

Button.defaultProps = {
    color: "default",
    text: "ButtonText",
    cssClass: "btn"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
