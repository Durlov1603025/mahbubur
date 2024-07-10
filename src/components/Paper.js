import { Link } from "react-router-dom";
import "./Paper.css";
import React from 'react'

const Paper = () => {
  return (
    <div className="paper">
        <h2 className="pub">Publications</h2>

        <ul className="lst" style={{ listStyleType: 'disc' }}>
            <li>Rahman M, Paul MK, Sattar AS. <b>Efficient perturbation techniques for preserving
            privacy of multivariate sensitive data.</b> Array 2023;:100324, Elsevier</li>
        </ul>

        <Link to="/publications">
        <button className="btn">View All Publications</button>
        </Link>
    </div>
  )
}

export default Paper