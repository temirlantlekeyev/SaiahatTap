import "./Main.css"
import { FaPlay } from "react-icons/fa";
import ala from "../../Assets/ala.jpg";
import tse from "../../Assets/tse.jpg";
import kaz from "../../Assets/kaz.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const Main = () => {

     

    const navigate = useNavigate()

    const [start, setStart] = useState()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const  { t }  = useTranslation();
    return (
        <div className="wrapper">
            <div className="textcontainer">
                <h1 className="h1">SaıahatTap</h1>
                <h3 className="h3">{t("let's guess")}</h3>
            </div>
                <div className="destination">
                    <h1 className="h2">{t("choose")}</h1>
                {/* <h1 className="h2">Choose your destination:</h1> */}
                </div>
            <div className="levelcontainer">
        
                <div className="level">
                    <div className="description">
                    <h2 className="h2name">{t("almaty")}</h2>
                    <h3 className="desc">{t("almaty_desc")}</h3>
                    <img className="mainimg" src={ala}/>
                    <div className="button">
                    
                        <button className="btn" onClick={()=>{navigate('/Almaty')}}><FaPlay/> {t("play")}</button>
                       
                    </div>
                    </div>
                </div>

                <div className="level">
                    <div className="description">
                    <h2 className="h2name">{t("astana")}</h2>
                    <h3 className="desc">{t("astana_desc")}
                    </h3>
                    <img className="mainimg" src={tse}/>
                    <div className="button"><button className="btn" onClick={()=>{navigate('/Nursultan')}}><FaPlay/>{t("play")}</button></div> 
                    </div>
                </div>

                <div className="level">
                    <div className="description">
                    <h2 className="h2name">{t("kazakhstan")}</h2>
                    <h3 className="desc">{t("kazakhstan_desc")}</h3>
                    <img className="mainimg" src={kaz}/>
                    <div className="button">
                        <button className="btn" onClick={()=>{navigate('/Kazakhstan')}}><FaPlay/>{t("play")}</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

 
    )
}

export default Main;