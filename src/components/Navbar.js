import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = ({ISlogin,setIsLoggedIn}) => {
  return (
    <div  className='flex justify-evenly bg-black text-white items-center p-2'>
        
        <div>
        <Link to="/">
        <img src={Logo}/>
        </Link>
        </div>

        <div>
        <nav>
            <ul className='flex gap-4'>
                <Link  to="/">
                <li>Home</li>
                </Link>
                <Link to="/">
                <li>About</li>
                </Link>
                <Link to="/">
                <li>Contact</li>
                </Link>
            </ul>
        </nav>
        </div>

        <div className='flex gap-4'>
          {
            !ISlogin &&
            <Link to="/login">
            <button>Login</button>
            </Link>
          }

          {
            !ISlogin &&
            <Link to="/signup">
          <button>SignUp</button>
          </Link>

          }

          {
            ISlogin &&
            <Link to="/" >
          <button onClick={()=>{
            setIsLoggedIn(false)
            toast.success("Logged Out")
          }}>LogOut</button>
          </Link> 
          }

          
          {
            ISlogin &&
            <Link to="/dashboard">
          <button>Dashboard</button>
          </Link>
          }

        </div>

        
    </div>
  )
}

export default Navbar