import React from 'react'
import "./Info.css";
import Img from "../asset/durlov.png"
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className='info'>

        <div className='image'>
            <img src={Img} alt='Durlov' />
        </div>
        <div className='text'>
            <h2>Mahbubur Rahman</h2>
            <p className='first'>Data Privacy & Security Enthusiast</p>
            <p className='secd'><b>Welcome! I'm Mahbubur Rahman, a tech enthusiast passionate about data privacy, security, and machine learning. Proficient in Python, Matlab, C, C++, and Java, I also specialize in crafting visually appealing websites using HTML, CSS, and Javascript, with expertise in React.js and PHP. Join me on a journey through innovation, exploring the endless possibilities of technology and data security.</b></p>
            <Link to="/about">
            <button>About Me</button>
          </Link>
        </div>

        {/* <div className='image'>
            <img src={Img} alt='Durlov' />
        </div> */}
    </div>
  )
}

export default Info