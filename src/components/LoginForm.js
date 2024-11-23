import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegEyeSlash , FaRegEye} from "react-icons/fa6";
import { Link , useNavigate} from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

  const[Formdata,setformdata]=useState({emaildata:"",passworddata:"",})

  function ChangeHandler(event)
  {   
     const{name,value,checked,type}=event.target
 
     setformdata(prevformData=>{
       return{
         ...prevformData ,
         [name]:type === 'checkbox' ? checked : value
       }
         
       
     })
  }

  const[eyeIcon,seteyeIcon]=useState(false)

  const navigate = useNavigate()

  function submitHandler(event)
  { 
    event.preventDefault();
    setIsLoggedIn(true);
    console.log(Formdata)
    toast.success("Logged In");
    navigate("/dashboard");
  }
  


  return (
    <form onSubmit={submitHandler}>

       <label>
        <p>Email Address</p>
        <input
          type='email'
          name='emaildata'
          placeholder='Enter email address'
          onChange={ChangeHandler}
          value={Formdata.emaildata}
        />
       </label>

       <label>
        <p>Password</p>
        <input
          type={eyeIcon?"text":"password"}
          name='passworddata'
          placeholder='Enter Password'
          onChange={ChangeHandler}
          value={Formdata.passworddata}
        />
        <span onClick={()=>seteyeIcon(!eyeIcon)}>{eyeIcon?(<FaRegEyeSlash />):(<FaRegEye />)}</span>
        <span>Forget Password</span>
       </label>

       
       <button className='p-[1rem] bg-green-300'>Sign In</button>
      

    </form>
  )
}

export default LoginForm