import {FaMapMarkedAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import kz from "../../Assets/kz.png";
import ru from "../../Assets/russia.png";
import en from "../../Assets/england.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Header = () => {
    
    const {t} = useTranslation();

    const [change, setChange] = useState(null);
    const handleChange = (event) => {
        setChange(event.target.value)
    }

    const navigater = useNavigate()

    return (
        <div className="headercontainer">
        <div className="header" onClick={()=>{navigater('/')}}><FaMapMarkedAlt/>Nomad location</div>
        {/* <div className="links">
        <img className="en" onClick={handleChange} src={en} />
        <img className="kz" onClick={handleChange} src={kz}/>
        <img className="ru" onClick={handleChange} src={ru}/>
        </div> */}
        </div>
    )
}