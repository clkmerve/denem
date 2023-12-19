import React, { useState } from 'react'
import './Navbar.css'

import { AiFillCloseCircle } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";



const Navbar=()=> {
  const[navBar , setNavBar] = useState('menu');
  const showNavBar = () => {
    setNavBar('menu showNavbar');
  }
  const removeNavBar = () => {
    setNavBar('menu');
  } 





  return (
    <div className='navBar'>
      <div className="logoDiv">
        <button >
      <img src="/images/kahveLogo.png" alt="Logo" className="logoImage" />
       </button>
    

      </div>
      <div className={navBar}>
        <ul>
          <li className='navList'>
           Ana sayfa 
          </li>
          <li className='navList'>
            Menü 
          </li>
          <li className='navList'>
            Hakkımızda 
          </li>
          
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar}/>

      </div>
    
      <div className='button'>
      <button className="signUpBtn btn"><FiUser /></button>
      <button className='shoppingCart'><IoCartOutline /></button>
      
      </div>
     <IoReorderThree className='icon menuIcon' onClick={showNavBar}/>




     
    </div>
  )
}

export default Navbar
