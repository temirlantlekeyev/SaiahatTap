import React, { useState} from "react";
import { FaArrowCircleRight } from "react-icons/fa";


const Images = ({currentImgIndex, images}) => {

    return (
        <>
        <div className="imgcontainer">
            <img src={images[currentImgIndex].url}/>
        </div>
        </>
    )
}

export default Images;
