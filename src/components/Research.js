import "./Research.css";
import React from 'react'

const research = () => {
  return (
    <div className="research">
        <div className="title">
            <h2>Research Interests</h2>
        </div>
        <div className="list">
            <ul style={{ listStyleType: 'disc' }}>
                <li>Privacy Preserving Data Mining (PPDM)</li>
                <li>Information Security</li>
                <li>Data Privacy</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Artificial Intelligence</li>
                <li>Cyber Security</li>
            </ul>
        </div>
    </div>
    
  )
}

export default research