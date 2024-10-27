import React from 'react'
import  { useRef} from 'react'
import { auth } from '../config/firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

  const Resgistration = () => {

  
    const email = useRef()
    const password = useRef()

    const resgistrationUser = (event) => {
      event.preventDefault()
      console.log(email.current.value);
      console.log(password.current.value);

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {

    const user = userCredential.user;
    console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  
    }
  return (
   <>
   
   <form onSubmit={resgistrationUser}>
    <p><input type="email" name="" id="" ref={email} placeholder='Enter Your Email' /></p>
    <p><input type="Password" ref={password} placeholder='Enter Your Password' name="" id="" /></p>
    <button>Login</button>
   </form>
   
   </>
  )
}

export default Resgistration