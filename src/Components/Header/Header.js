import {FaMapMarkedAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import kz from "../../Assets/kz.png";
import ru from "../../Assets/russia.png";
import en from "../../Assets/england.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { internalFrenchkiss } from "../../frenchkiss";
import frenchkiss from "frenchkiss";

export const Header = () => {
    
    const { t, i18n } = useTranslation();


    const changeLanguage = (language) => {
        localStorage.setItem('lang', language)
        internalFrenchkiss.locale(language);
        i18n.changeLanguage(language);
      
      };
      console.log(changeLanguage)

    const navigater = useNavigate()

    return (
        <div className="headercontainer">
        <div className="header" onClick={()=>{navigater('/')}}><FaMapMarkedAlt/>SaıahatTap</div>
        <div className="links">
        <img className="en" onClick={() => changeLanguage("en")} src={en} />
        <img className="kz" onClick={() => changeLanguage("kz")} src={kz}/>
        <img className="ru" onClick={() => changeLanguage("ru")} src={ru}/>
        </div>
        </div>
    )
}

export default Header;