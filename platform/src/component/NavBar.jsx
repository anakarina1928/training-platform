import React from 'react'
import '../asset/navbar.css'
import { CgTimelapse } from 'react-icons/cg';
import { RiBookMarkFill } from 'react-icons/ri';
import { AiOutlineCalendar,AiFillWechat } from 'react-icons/ai';
import { GiMedal } from 'react-icons/gi';
import { TiSpanner} from 'react-icons/ti';

const NavBar = () => {
  return (
    
    <nav id="navbar" className="navbar header d-flex flex-column justify-content-start">
     <img src='../../public/img/logo.png'></img>
        <a href="#" > <CgTimelapse className="nav-link nav-icon" /></a>
        <a href="#" > <RiBookMarkFill className="nav-link nav-icon"/></a>
        <a href="#" > <AiOutlineCalendar className="nav-link nav-icon"/></a>
        <a href="#" > <AiFillWechat className="nav-link nav-icon"/></a>
        <a href="#" > <GiMedal className="nav-link nav-icon"/></a>
        <a href="#" > <TiSpanner className="nav-link nav-icon"/></a>
        
    </nav>

  
  )
}

export default NavBar;
