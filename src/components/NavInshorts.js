import React from 'react'
import logo_inshorts from './../images/impactwise logo 2000.png'
import './NavInshorts.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HamburgerDrawer from './HamburgerDrawer'
import { useAuth0 } from "@auth0/auth0-react";
import { ForkLeft } from '@mui/icons-material';
import App from './../App.js';
import { Link } from 'react-router-dom';

const NavInshorts = ({setCategory}) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();


  
  return (<>
    <div className='nav'>
      <div className='icon'><HamburgerDrawer setCategory={setCategory} /></div>

      <Link to="/"><img className='logo' style={{cursor: 'pointer'}} src={logo_inshorts} height='80%' alt='logo'></img></Link>
      <ul>
        <li>
        <Link className='lnk' to="/about">About Us</Link>
        </li>
        <li>
        <Link className='lnk' to="/contact">Contact Us</Link>
        </li>
       </ul>
     
        {isAuthenticated ? (
          <a style={{marginLeft:"100px"}} target='blank' className="but">
          <p className='user'>Welcome <b style={{color: "blue"}} >{user.name}</b></p>
          <button className='button-45' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </a>

    
        )
        :(
          <a style={{marginLeft:"100px"}} target='blank' className="but">
          {/* <button  className='button-36' onClick={() => loginWithRedirect()}>Log In</button> */}
          </a>
        )
      }
     
     
      
    </div>
   
    </>
  )
}

export default NavInshorts
