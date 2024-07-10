import "./FooterStyle.css";
import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="foot">
            <div className="lft">
                <FaHome /> 262 West Monipur, Mirpur - Dhaka
                <p>Bangladesh</p>
                <h4><FaPhone /> +880 1775964184</h4>
                <h4><MdEmail /> durlovrahman32@gmail.com</h4>
            </div>
            <div className="rght">
                <p className="para"><b>Social Links</b></p>
                <p><FaLinkedin /> <Link className="link" to="https://www.linkedin.com/in/mahbubur-rahman-durlov/" target="_blank">Linkedin</Link></p>
                <p><FaGitlab /> <Link className="link" to="https://gitlab.com/mahbubur16" target="_blank">Gitlab</Link></p>
                <p><FaGithub /> <Link className="link" to="" target="_blank">Github</Link></p>
                <p><FaFacebookSquare /> <Link className="link" to="https://www.facebook.com/mahbubur.rahman.durlov.1603025" target="_blank">Facebook</Link></p>
            </div>
        </div>

    </div>
  )
}

export default Footer