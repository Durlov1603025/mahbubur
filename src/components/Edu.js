import "./Edu.css";
import { FaRegStar } from "react-icons/fa";
import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const Edu = () => {
  return (
    <div className="edu">
        <div className="ttl">
            <h2>Education</h2>
        </div>
        <div className="scl">
            <p className="nm"><FaSchool /> Rajshahi University of Engineering & Technology</p>
            <p><RiGraduationCapFill /> BSc. in Computer Science & Engineering</p>
            <p><FaRegStar /> CGPA: 3.35 / 4.00</p>
            <p><FaCalendarAlt /> 2017 - 2022</p>

            <br />

            <p className="nm"><FaSchool /> Dhaka Residential Model College</p>
            <p><RiGraduationCapFill /> Higher Secondary (Group: Science)</p>
            <p><FaRegStar /> CGPA: 5.00 / 5.00</p>
            <p><FaCalendarAlt /> 2014 - 2016</p>

            <br />

            <p className="nm"><FaSchool /> Monipur High School</p>
            <p><RiGraduationCapFill /> Secondary (Group: Science)</p>
            <p><FaRegStar /> CGPA: 5.00 / 5.00</p>
            <p><FaCalendarAlt /> 2005 - 2014</p>

        </div>
    </div>
  )
}

export default Edu