import {FaMapMarkedAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";


export const Header = () => {
  
    const navigater = useNavigate()

    return (
        <>
        <div className="header" onClick={()=>{navigater('/')}}><FaMapMarkedAlt/>Nomad location</div>
        </>
    )
}