import {FaMapMarkedAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";


export const Header = () => {
  
    const navigater = useNavigate()

    return (
        <>
        <div className="headercontainer">
        <div className="header" onClick={()=>{navigater('/')}}><FaMapMarkedAlt/>Nomad location</div>
        {/* <div className="language">
        <div>Language:</div>
        <select className="select">
            <option>English</option>
            <option>Русский</option>
            <option>Қазақша</option>
        </select>
        </div> */}
        </div>
        </>
    )
}