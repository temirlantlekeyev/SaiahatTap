import {FaGithubSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
import n from "../../Assets/nfac.png"

export const Footer = () => {
    return (
        <div className="footer">
        
        <div className="nfac"><img  className="n" src={n}/>nfactorial.incubator 2022 </div>
        <div className="create">Created by Temirlan Tlekeyev</div> 
        
        <div className="links">
        <a href="https://t.me/temirlan_tlk" target="_blank"><FaTelegram/></a>
        <a href="https://www.instagram.com/temirlan_tlk/" target="_blank"><FaInstagram/></a>
        <a href="https://github.com/temirlantlekeyev" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.linkedin.com/in/temirlan-tlekeyev-735691218/" target="_blank"><FaLinkedin/></a>
        </div>
        </div>
    )
}