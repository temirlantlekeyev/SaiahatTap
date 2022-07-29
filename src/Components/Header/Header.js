import {FaMapMarkedAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import kz from "../../Assets/kz.png";
import ru from "../../Assets/russia.png";
import en from "../../Assets/england.png";

export const Header = () => {
  
    const navigater = useNavigate()

    return (
        <>
        <div className="headercontainer">
        <div className="header" onClick={()=>{navigater('/')}}><FaMapMarkedAlt/>Nomad location</div>
        <img className="en" src={en} />
        <img className="kz" src={kz}/>
        <img className="ru" src={ru}/>
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