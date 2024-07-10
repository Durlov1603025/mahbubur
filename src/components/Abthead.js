import React from 'react'
import { FiDownload } from "react-icons/fi";
import "./Abthead.css";
import CV from "../asset/Mahbubur Rahman_CV.pdf"
import Dur from "../asset/dur.jpg"

const Abthead = () => {
  return (
    <div className="abt">

        <div className='imag'>
            <img src={Dur} alt='Durlov'/>
        </div>

        
        <div className="txt">
            <h2>Greetings!</h2>
            <br /><br />
            <p>I am fueled by a passion for safeguarding digital landscapes, with a particular focus on data privacy, security, and the dynamic intersection of machine learning, and security approaches. My journey involves the exciting realms of research, where I explore the possibilities using Python, Matlab, and other tools.</p>
            <br />
            <p>Beyond the algorithms, I am fluent in the languages of secure and efficient code, namely C, C++, and Java. </p>
            <br />
            <p>In the realm of web development, I am a craftsman of seamless and visually appealing websites. Using a blend of HTML, CSS, and Javascript, I bring ideas to life. My toolkit extends to React.js and PHP, enabling me to construct dynamic and interactive web applications.</p>
            <br />
            <p>Research is not just a part of my journey; it's my compass. Staying abreast of the latest trends in data security fuels my curiosity and ensures my skills remain aligned with the ever-evolving technology landscape. The dedication to building secure systems is matched only by my enthusiasm for unraveling the vast possibilities of machine learning and deep learning.</p>
            <br />
            <a href={CV} download>Download CV <FiDownload /></a>
        </div>

        {/* <div className='imag'>
            <img src={Dur} alt='Durlov'/>
        </div> */}
    </div>
  )
}

export default Abthead