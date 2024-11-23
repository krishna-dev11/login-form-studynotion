import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegEyeSlash , FaRegEye} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

  const [FormData,setformdata] = useState({firstname:"",lastname:"",emaildata:"",enterpassworddata:"",confirmpassworddata:""})

  function handelformdata(event)
  {
    const {name,value,type,checked}=event.target
    setformdata(pre=>{
      return{
        ...pre,
        [name]:type==="checkbox"?checked:value
      }
    })
  }

  const [eyeicon1,seteyeicon]=useState(false)
  const [eyeicon2,seteyeicon2]=useState(false)

  const navigate = useNavigate()

  function submitHandler(event)
  {
      // event.preventDefault()
      // console.log(FormData)
      // (FormData.enterpassworddata != FormData.confirmpassworddata)?toast.error("Password Not Match"):toast.success("Account Created")

      event.preventDefault();
      console.log(FormData)
      if(FormData.enterpassworddata === FormData.confirmpassworddata)
      {
        toast.success("Account Created")
        setIsLoggedIn(true)
        navigate("/dashboard")
      }
      else
      {
        toast.error("Password Not Match")
      }

    }

   
  return (
    <form onSubmit={submitHandler}>

    <div className='flex bg-green-100'>
      <div>Student</div>
      <div>Instructor</div>
    </div>

    <div className='flex gap-8'>

       <label>
        <p>First Name<sup>*</sup></p>
        <input
          type='text'
          placeholder='Enter First Name'
          name='firstname'
          onChange={handelformdata}
          value={FormData.firstname}
        />
       </label>

       <label>
        <p>Last Name<sup>*</sup></p>
        <input
          type='text'
          placeholder='Enter Last Name'
          name='lastname'
          onChange={handelformdata}
          value={FormData.lastname}
        />
       </label>

    </div>

    <label>
        <p>Email Address<sup>*</sup></p>
        <input
          type='email'
          placeholder='Enter Email Address'
          name='emaildata'
          onChange={handelformdata}
          value={FormData.emaildata}
        />
    </label>

    <div className='flex gap-8'>

    <label>
        <p>Create Password<sup>*</sup></p>
        <input
          type={eyeicon1?"password":"text"}
          placeholder='Enter Password'
          name='enterpassworddata'
          onChange={handelformdata}
          value={FormData.enterpassworddata}
        />
        <span onClick={()=>seteyeicon(!eyeicon1)}>{eyeicon1?(<FaRegEyeSlash />):(<FaRegEye />)}</span>
        
    </label>

    <label>
        <p>Confirm Password<sup>*</sup></p>
        <input
          type={eyeicon2?"password":"text"}
          placeholder='Confirm Password'
          name='confirmpassworddata'
          onChange={handelformdata}
          value={FormData.confirmpassworddata}
        />
        <span onClick={()=>seteyeicon2(!eyeicon2)}>{eyeicon2?(<FaRegEyeSlash />):(<FaRegEye />)}</span>
    </label>

    </div>

    <button>Create Account</button>

    </form>
  )
}

export default SignupForm