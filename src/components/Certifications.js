import React from 'react'
import "./Cert.css";
import Cert from "../asset/certificate.pdf"
import { Link } from 'react-router-dom';

const Certifications = () => {
  return (
    <div className='cert'>
        <h2 className='hd'>Certifications</h2>

        <ul className="cont" style={{ listStyleType: 'disc' }}>
            <li><b>Intro to Machine Learning</b> <i>[<Link to="https://www.kaggle.com/learn/certification/mahbuburrahmandurlov/intro-to-machine-learning" target="_blank">See Certificate</Link>]</i></li>
            <li><b>Intermediate Machine Learning</b> <i>[<Link to="https://www.kaggle.com/learn/certification/mahbuburrahmandurlov/intermediate-machine-learning" target='_blank'>See Certificate</Link>]</i></li>
            <li><b>Machine Learning with scikit-learn</b> <i>[<Link to={Cert} target='_blank'>See Certificate</Link>]</i></li>
            <li><b>Unsupervised Learning in Python</b> <i>[<Link to="https://www.datacamp.com/statement-of-accomplishment/course/dc97b199e030c42fa0a133f77bc48e6f98521a16?raw=1" target='_blank'>See Certificate</Link>]</i></li>
            <li><b>Machine Learning with Tree-Based Models in Python</b> <i>[<Link to="https://www.datacamp.com/statement-of-accomplishment/course/32a5825f3ebecc6742f94b7fba8b14313781cd64?raw=1" target='_blank'>See Certificate</Link>]</i></li>
            <li><b>Neural Networks and Deep Learning</b> <i>[<Link to="https://www.coursera.org/account/accomplishments/verify/Q2X9KHHTTWLK" target='_blank'>See Certificate</Link>]</i></li>
            <li><b>Introduction to Applied Cryptography Specialization</b> <i>[<Link to="https://www.coursera.org/account/accomplishments/specialization/KEH3EYFT6QWL" target='_blank'>See Certificate</Link>]</i></li>
            <li><b>Introduction to Cybersecurity</b> <i>[<Link to="https://www.credly.com/badges/9118acad-53af-4a21-864c-2e1e7d22efac" target='_blank'>See Certificate</Link>]</i></li>
            <li><b>Introduction to Cyber Attacks</b> <i>[<Link to="https://www.coursera.org/account/accomplishments/verify/YKU3UFWQGFCD" target='_blank'>See Certificate</Link>]</i></li>
        </ul>
    </div>
  )
}

export default Certifications