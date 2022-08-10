import React, { useState } from 'react';
import { coordinatesData } from '../../../Data/KazakhstanData'
import Images from './Images';
import Map from './Map';
import Swal from "sweetalert2";
import JSConfetti from "js-confetti";
import {MdSportsScore} from "react-icons/md";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import frenchkiss from "frenchkiss";
import { internalFrenchkiss } from '../../../frenchkiss';

const jsConfetti = new JSConfetti();

const alertAttempt = () => {
  Swal.fire({
    title: internalFrenchkiss.t('attempt'),
    text: internalFrenchkiss.t('tryorselect'),
    icon: 'warning',
    allowOutsideClick: false,
    showCancelButton: true,
    cancelButtonText: internalFrenchkiss.t('mainpage'),
    cancelButtonColor: '#3085d6',
    confirmButtonColor: 'green',
    confirmButtonText: internalFrenchkiss.t('yestry')
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href="/Kazakhstan"
    } else if ( result.dismiss === Swal.DismissReason.cancel){
      window.location.href="/"
    }
  });
}

const alertFail = () => {
  Swal.fire({
    title: internalFrenchkiss.t('time'),
    text: internalFrenchkiss.t('tryorselect'),
    icon: 'warning',
    allowOutsideClick: false,
    confirmButtonColor: 'green',
    showCancelButton: true,
    cancelButtonText: internalFrenchkiss.t('mainpage'),
    cancelButtonColor: '#3085d6',
    confirmButtonText: internalFrenchkiss.t('yestry')
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href="/Kazakhstan"
    } else if ( result.dismiss === Swal.DismissReason.cancel){
      window.location.href="/"
    }
  });
}

const alertFinish = () => {
  Swal.fire({
    title: internalFrenchkiss.t('congrats'),
    text: internalFrenchkiss.t('next'),
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: 'green',
    cancelButtonColor: '#d33',
    confirmButtonText: internalFrenchkiss.t('select')
}).then((result) => {
  if (result.isConfirmed) {
    window.location.href="/"
  }
});
 jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 600,
  });
}

const alertSuccess = () => {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: internalFrenchkiss.t('correct'),
    showConfirmButton: false,
    timer: 1500,
  });
};

function GameKazakhstan() {

  const [second, setSecond] = useState(20)
  const [minute, setMinute] = useState(0)
  const [start, setStart] = useState(false)

  let timer;
  const [firstMount, setFirstMount] = useState(false);
  useEffect (() => {
    if (firstMount) return;
    Swal.fire({
      icon: 'info',
      title: internalFrenchkiss.t('how'),
      text: internalFrenchkiss.t('rule'),
      confirmButtonText: internalFrenchkiss.t('start'),
      confirmButtonColor: "green",
  
    }).then(() => {
      setFirstMount(true)
    })
   
  }, [firstMount, setFirstMount])

  useEffect(() => {
    if (firstMount) {
      timer = setInterval(() => {
        setSecond(second-1);
        if(second === 0) {
          setSecond(0)
          alertFail();
          clearInterval(timer)
        } if (scores === 30) {
          setTimeout(setSecond(1))
        }if (attempt === 3) {
          setTimeout(setSecond(1))
        }
      }, 1000)
    }
    return () => {
      if (timer)
        clearInterval(timer)
    };
  }, [firstMount, second])

 
  const [attempt, setAttempt] = useState(0)


  // const navigater = useNavigate()

  const [scores, setScores] = useState(0)
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  const randomImage = (images) => {
    return images[Math.floor(Math.random() * images.length)]
   }

  const imgFindIndex = coordinatesData.findIndex((elem, index) => index === currentImgIndex )
  // console.log(imgFindIndex)

  const onMarkerClick = (coordinatesData, e) => {
    const places = coordinatesData.find( (place) => 
      place.lat == e.latlng.lat && place.long == e.latlng.lng);
      if (scores === 29 && places.id -1 === imgFindIndex) {
        setScores(scores+1)
        alertFinish();
      } 
      else if (places.id -1 === imgFindIndex) {
          setCurrentImgIndex(currentImgIndex + 1)
          // setCurrentImgIndex((currentImgIndex + Math.floor(Math.random() * coordinatesData.length)))
          alertSuccess();
          setScores(scores+1);
          setSecond(20);
        } else if (places.id -1 !== imgFindIndex && attempt === 2) {
          setAttempt(attempt+1)
          alertAttempt();
        } else {
          setAttempt(attempt+1)
          Swal.fire ({
            position: "center-center",
            icon: "error",
            title: internalFrenchkiss.t('error'),
            showConfirmButton: false,
            timer: 500
          })
        } 
      }

      const  { t }  = useTranslation();


  return (

    <div className='wrap'>
      <div className='scorecontainer'>
        <div className='scores'>
      <h2 className='score'><MdSportsScore/>{t("your score")} {scores} {t("out of")} 30</h2>
      </div>
      <div className='timercontainer'>
      <h4 className='timer'>{t("timer")} {minute < 10? "0"+minute : minute}:{second < 10? "0"+second : second} </h4>
      <h4 className='attempt'>{t("attempts")} {attempt}/3</h4>
      </div>
      </div>
      
      <div className='gamecontainer'>
        <div className='imgclass'>
        <Images currentImgIndex={currentImgIndex} images={coordinatesData}/>
        </div>
        <Map coordinates={coordinatesData} onMarkerClick={onMarkerClick} currentImgIndex={currentImgIndex} />
      </div>
      </div>
      
  );
}

export default GameKazakhstan;