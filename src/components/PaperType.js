import React from 'react'
import "./PaperType.css";
import { FiDownload } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Paper1 from "../asset/Efficient perturbation techniques for preserving privacy of multivariate sensitive data.pdf"

const PaperType = () => {
  return (
    <div className='contain'>
        <div className='type'>
            <h2>Journal</h2>
        </div>
        <div className='description'>
            <h2>Efficient perturbation techniques for preserving privacy of multivariate sensitive data. [<Link to="https://www.sciencedirect.com/science/article/pii/S2590005623000498?ref=pdf_download&fr=RR-2&rr=89e7ead30fdf786e" target="_blank">Link</Link>]</h2>
            <p className='author'><b>Authors</b>: Mahbubur Rahman, <Link to="https://scholar.google.com/citations?user=j2jLBD8AAAAJ&hl=en" target="_blank">Mahit Kumar Paul</Link>, <Link to="https://scholar.google.com/citations?user=5OWdjqEAAAAJ&hl=en" target="_blank">A.H.M. Sarowar Sattar</Link></p>
            <p><FaCalendarAlt /> December 2023</p>
            <p className='abstract'><b><u>Abstract</u></b>: Cloud data is increasing significantly recently because of the advancement of technology which can contain individuals’ sensitive information, such as medical diagnostics reports. While deriving knowledge from such sensitive data, different third party can get their hands on this sensitive information. Therefore, privacy preservation of such sensitive data has become a vital issue. Data perturbation is one of the most often used data mining approaches for safeguarding privacy. A significant challenge in data perturbation is balancing the privacy and utility of data. Securing an individual’s privacy often entails the forfeiture of the data utility, and the contrary is true. Though there exist several approaches to deal with the trade-off between privacy and utility, researchers are always looking for new approaches. In order to address this critical issue, this paper proposes two data perturbation approaches namely NOS2R and NOS2R2. The proposed perturbation techniques are experimented with over ten benchmark UCI data set for analyzing privacy protection, information entropy, attack resistance, data utility, and classification error. The proposed approaches are compared with two existing approaches 3DRT and NRoReM. The thorough experimental analysis exhibits that the best-performing approach NOS2R2 offers 15.48% higher entropy and 15.53% more resistance against ICA attack compared to the best existing approach NRoReM. Furthermore, in terms of utility, the accuracy, f1-score, precision and recall of NOS2R2 perturbed data are 42.32%, 31.22%, 30.77% and 16.15% more close to the original data respectively than the NRoReM perturbed data.</p>
            <a className='down' href={Paper1} download>Download <FiDownload /></a>
        </div>
    </div>
  )
}

export default PaperType