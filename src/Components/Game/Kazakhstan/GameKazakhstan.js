import React, { useState } from 'react';
import { coordinatesData } from '../../../Data/KazakhstanData'
import Images from './Images';
import Map from './Map';
import Swal from "sweetalert2";
import JSConfetti from "js-confetti";
import {MdSportsScore} from "react-icons/md";
import { useEffect } from 'react';


const jsConfetti = new JSConfetti();

const alertAttempt = () => {
  Swal.fire({
    title: 'Your attempts are over!',
    text: "Would you like to try again or select next level?",
    icon: 'warning',
    allowOutsideClick: false,
    showCancelButton: true,
    cancelButtonText: 'Main page!',
    cancelButtonColor: '#3085d6',
    confirmButtonColor: 'green',
    confirmButtonText: 'Yes, try again!'
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
    title: 'Time is up!',
    text: "Would you like to try again?",
    icon: 'warning',
    allowOutsideClick: false,
    confirmButtonColor: 'green',
    showCancelButton: true,
    cancelButtonText: 'Main page!',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, try again!'
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
  title: 'Congrats! You win!',
  text: "Would you like to go to the next level?",
  icon: 'success',
  showCancelButton: true,
  confirmButtonColor: 'green',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Select'
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
    title: "Correct!",
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
      title: 'How to play?',
      text: 'You have to guess celebrated places and mark on the map by selecting the desired marker! However, you have only 3 chances and 25 seconds for each picture. Good luck!',
      confirmButtonText: "Start!",
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
      if (scores === 24 && places.id -1 === imgFindIndex) {
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
            title: "Oops... Try again",
            showConfirmButton: false,
            timer: 500
          })
        } 
      }

  return (

    <div className='wrap'>
      <div className='scorecontainer'>
        <div className='scores'>
      <h2 className='score'><MdSportsScore/>Your score: {scores} out of 25</h2>
      </div>
      <div className='timercontainer'>
      <h4 className='timer'>Timer: {minute < 10? "0"+minute : minute}:{second < 10? "0"+second : second} </h4>
      <h4 className='attempt'>Attempts: {attempt}/3</h4>
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