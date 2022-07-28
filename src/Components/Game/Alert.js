import { useEffect } from "react";
import Swal from "sweetalert2";

export const Alert = () => {

  useEffect(() => {
    Swal.fire({
      icon: 'info',
      title: 'How to play?',
      text: 'You have to guess celebrated places and mark on the map by selecting the desired marker! However, you have only 3 chances and 25 seconds for each picture. Good luck!',
      confirmButtonText: "Start!",
      confirmButtonColor: "green",
    })
  }, [])


  }

  