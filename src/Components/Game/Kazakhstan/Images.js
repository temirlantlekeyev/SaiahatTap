import React, { useState} from "react";
import { FaArrowCircleRight } from "react-icons/fa";


const Images = ({onNextClick, currentImgIndex, images}) => {

    // console.log(currentImgIndex);
    return (
        <>
        <div className="imgcontainer">
            <img src={images[currentImgIndex].url}/>
            {/* <button className="imgbtn" onClick={onNextClick}> NEXT <FaArrowCircleRight/> </button> */}
        </div>
        </>
    )
}

export default Images;