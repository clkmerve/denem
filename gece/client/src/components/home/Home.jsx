import React from 'react'
import './Home.css';

import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className='Home'>
      <div className='homeImg'>
        <img src='/images/home-img.jpg' alt="" />
      </div>

      <div className="sectionText">
        <h1 className='texth1'>MERDAN KAHVECİLİK</h1>
        <p>Lorem ipsum dolor sit, amet consectetur  id corrupti exercitationem!</p>
        <button className='btn flex'>Sipariş Ver!<AiOutlineSwapRight className='icon'/></button>
      
      </div>

      


    </div>
  )
}

export default Home
