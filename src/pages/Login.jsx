import React from 'react'
import  { useRef,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


  const Login = () => {

    const [error , setError] = useState(false)
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const loginUser = (event) => {
      event.preventDefault()
      console.log(email.current.value);
      console.log(password.current.value);

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate('/')

  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    setError(errorMessage)

  });

  
    }
  return (
   <>
   
   <form onSubmit={loginUser}>
    <p><input type="email" name="" id="" ref={email} placeholder='Enter Your Email' /></p>
    <p><input type="Password" ref={password} placeholder='Enter Your Password' name="" id="" /></p>
    <button>Login</button>
   </form>
   <p>{error && error}</p>
   </>
  )
}

export default Login