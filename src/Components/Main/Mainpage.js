import "./Main.css"
import { FaPlay } from "react-icons/fa";
import ala from "../../Assets/ala.jpg";
import tse from "../../Assets/tse.jpg";
import kaz from "../../Assets/kaz.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Main = () => {
    const navigate = useNavigate()

    const [start, setStart] = useState()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    // const top = window.scrollTo({
    //     top: 0, 
    //     behavior: 'smooth'
    //   })

    return (
        <div className="wrapper">
            <div className="textcontainer">
                <h1 className="h1">Nomad location</h1>
                
                <h3 className="h3">Let's guess and explore famous places all over Kazakhstan!</h3>
            </div>
                <div className="destination">
                <h1 className="h2">Choose your destination:</h1>
                </div>
            <div className="levelcontainer">
        
                <div className="level">
                    <div className="description">
                    <h2 className="h2name">Almaty</h2>
                    <h3 className="desc">Guess the 30 most visited and favorite places <br/>of Almaty residents!
                    </h3>
                    <img className="mainimg" src={ala}/>
                    <div className="button">
                    
                        <button className="btn" onClick={()=>{navigate('/Almaty')}}><FaPlay/> Play</button>
                       
                    </div>
                    </div>
                </div>

                <div className="level">
                    <div className="description">
                    <h2 className="h2name">Nur-Sultan</h2>
                    <h3 className="desc">Guess the 22 most visited and favorite places <br/>of Nur-sultan residents!
                    </h3>
                    <img className="mainimg" src={tse}/>
                    <div className="button"><button className="btn" onClick={()=>{navigate('/Nursultan')}}><FaPlay/> Play</button></div> 
                    </div>
                </div>

                <div className="level">
                    <div className="description">
                    <h2 className="h2name">Kazakhstan</h2>
                    <h3 className="desc">Guess the most visited and favorite places of <br/>Kazakhstan residents and tourists from <br/>all over the world!</h3>
                    <img className="mainimg" src={kaz}/>
                    <div className="button">
                        <button className="btn" onClick={()=>{navigate('/Kazakhstan')}}><FaPlay/> Play</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    //     <div className="wrapper">
    //     <div className="textcontainer">
    //         <h1 className="h1">Nomad location</h1>
            
    //         <h3 className="h3">Берілген суреттер арқылы Алматы, Нұр-Сұлтан және бүкіл Қазақстан ішіндегі түкпір-түкпіріндегі әйгілі жерлерді картадан табыңыз!
    //         <br/>Қазақстандағы туризмді дамыту. <br/>
    //              Туристерге және шетел елдер қонақтарға көрсету.</h3>
    //     </div>


    //         <div className="destination">
    //         <h1 className="h2">Баратын жеріңізді таңдаңыз:</h1>
    //         </div>
    //     <div className="levelcontainer">
    
    //         <div className="level">
    //             <div className="description">
    //             <h2 className="h2name">Алматы</h2>
    //             <h3 className="desc">Алматылықтардың ең көп баратын және сүйікті 30 жерін тап!
    //             </h3>
    //             <img className="mainimg" src={ala}/>
    //             <div className="button">
    //                 <button className="btn" onClick={()=>{navigate('/Almaty')}}><FaPlay/> Play</button>
    //             </div>
    //             </div>
    //         </div>

    //         <div className="level">
    //             <div className="description">
    //             <h2 className="h2name">Нұр-Сұлтан</h2>
    //             <h3 className="desc">Нұр-Сұлтандықтардың ең көп баратын және сүйікті 30 жерін тап!
    //             </h3>
    //             <img className="mainimg" src={tse}/>
    //             <div className="button"><button className="btn" onClick={()=>{navigate('/Nursultan')}}><FaPlay/> Play</button></div> 
    //             </div>
    //         </div>

    //         <div className="level">
    //             <div className="description">
    //             <h2 className="h2name">Қазақстан</h2>
    //             <h3 className="desc">Қазақстан тұрғындары мен әлемнің түкпір-түкпірінен келетін <br/> туристертердің ең көп баратын және сүйікті жерлерін табыңыз!</h3>
    //             <img className="mainimg" src={kaz}/>
    //             <div className="button">
    //                 <button className="btn" onClick={()=>{navigate('/Kazakhstan')}}><FaPlay/> Play</button>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}

export default Main;