import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frame from '../assets/frame.png'

const Template = ({title,description1,description2,image,formType,setIsLoggedIn}) => {
  return (
    <div className='bg-black text-white'>
      
      <div>
        <p>{title}</p>
        <p>{description1}</p>
        <p>{description2}</p>

        <div>
        {formType === "signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
        </div>

        <div>
          <div></div>
          <div>OR</div>
          <div></div>
        </div>

        <div>
          <button>Sign Up With Google</button>
        </div>



      </div>
      {/* image section */}
      <div>
        <img src={image}/>
        <img src={frame}/>
      </div>

    </div>
  )
}

export default Template