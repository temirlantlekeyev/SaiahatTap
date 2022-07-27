import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

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
        window.location.href="/Almaty"
      } else if ( result.dismiss === Swal.DismissReason.cancel){
        window.location.href="/"
      }
    });
  }

export const Timer = () => {

const [second, setSecond] = useState(30)
const [minute, setMinute] = useState(0)

let timer;
useEffect (() => {
  timer = setInterval(() => {
    setSecond(second-1);
    if(second === 0) {
      setSecond(0)
      alertFail();
      clearInterval(timer)
    } 
  }, 1000)
  return () => clearInterval(timer);
}, [])

}
