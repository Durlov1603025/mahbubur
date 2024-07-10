import "./Office.css";
import { TbTie } from "react-icons/tb";
import React from 'react'
import { HiOfficeBuilding } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

const Office = () => {
  return (
    <div className="office">
        <div className="exp">
            <h2>Experiences</h2>
        </div> 
        <div className="prof">
            <p className="ofc"><HiOfficeBuilding /> RTC Hubs Ltd.</p>
            <br />
            <p><TbTie /> Software Engineer</p>
            <br />
            <p><FaCalendarAlt /> 2023 - Present</p>

        </div>
    </div>
  )
}

export default Office