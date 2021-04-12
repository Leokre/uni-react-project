import {useState} from "react"

const Dropdown = ({title,items=[],multiSelect = false,callback,autoClose}) => {
const [open,setOpen] = useState(false);
const [selection,setSelection] = useState([]);
const toggle = ()=> setOpen(!open)

const handleOnClick = (item)=>{


            setSelection(item.value)
            if(autoClose && callback){
                setOpen(false)
                callback(item.value)
            }
            


}


    return (
        <div className="dd-wrapper">
            <div className="dd-header" 
            tabIndex={0} 
            role="button" 
            onKeyPress={()=>toggle()} 
            onClick={()=>toggle()}>
                <div className="dd-header__title">
                    <p className="dd-header__title--bold">{title}</p>
                </div>
                <div className="dd-header__action">
                  
                </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {items.map(item=>(
                        <li className="dd-list-item" key={item.id}  > 
                            <button type="button" onClick={()=> handleOnClick(item)}>
                                <span>{item.value}</span>
                            </button>
                        </li>
                    ))}

                </ul>
            )}
            
        </div>
    )
}

export default Dropdown
