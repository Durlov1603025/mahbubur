import "./ProjectList.css";
import Project1 from "../asset/ecotton.webp"
import React from 'react'
import Project2 from "../asset/car.webp"
import { Link } from "react-router-dom";
import Project4 from "../asset/intru.webp"
import Project3 from "../asset/Travel.png"
import Project5 from "../asset/book.png"
import Project6 from "../asset/cat.webp"
import Project8 from "../asset/heart.webp"
import Project7 from "../asset/football.webp"
import Project9 from "../asset/theft.webp"
import Project10 from "../asset/qa.PNG"

 
const ProjectList = () => {
  return (
    <div>
    <div className="first-part">
        <div className="photo">
            <img src={Project1} alt="E-Cotton"/>
        </div>

        <div className="detail">
            <h2>01. E-COTTON---An-Ecommerce-site</h2>
            <p>E-COTTON is an ecommerce platform for online clothing store which is developed using React.js. This website leverages React’s componentbased architecture to create interactive and dynamic features. The key features are: </p>
                <ul style={{ listStyleType: 'disc' }}>
                    <li><b>Product Listings: </b>Created dynamic product listings with detailed descriptions, highquality
                    images, and pricing information.</li>
                    <li><b>User Authentication: </b>Implemented a user registration and login system to personalize
                    the shopping experience and enable secure account management.</li>
                    <li><b>Shopping Cart: </b>Designed a user-friendly shopping cart that allows customers to add,
                    modify, and remove items with ease.</li>
                    <li><b>Reviews and Ratings: </b>Included a customer review and rating system to build trust
                    and aid in product selection.</li>
                </ul>
                <Link to="https://gitlab.com/mahbubur16/e-cotton-an-ecommerce-site" target="_blank">
                <button className="git">View Source Code</button>
                </Link>
        </div>
    </div>

     <div className="second-part">
        <div className="phot">
            <img src={Project2} alt="Car"/>
        </div>

        <div className="detail">
            <h2>02. Car Price Predictor</h2>
            <p>Developed a Car Price Predictor application utilizing machine learning techniques. Employed Linear Regression to create a predictive model for estimating car prices based on relevant features. Designed and implemented a user-friendly web interface for users to input car details and receive price predictions. Leveraged Python, scikit-learn, Flask, and web technologies to build the application.</p>
            <Link to="https://gitlab.com/mahbubur16/car-price-predictor" target="_blank">
             <button className="git">View Source Code</button>
            </Link>
        </div>
    </div>



    <div className="first-part">
        <div className="photo">
            <img src={Project3} alt="Travelo"/>
        </div>

        <div className="detail">
            <h2>03. TRAVELO---A-Travel-Website</h2>
            <p>TRAVELO is a travel website created with React Js and CSS. The goal of this project for me was to get familiar with some of the fundamentals of using React Hooks and React Router. The key features are: </p>
                <ul style={{ listStyleType: 'disc' }}>
                    <li><b>User Authentication: </b>Implemented a user registration and login system to personalize
                    the traveling experience and enable secure account management</li>
                    <li><b>Destination Listings: </b>The Destination page includes all featured travel destinations
                    from Bangladesh. A detail descriptions of the popular destinations has also been added.</li>
                    <li><b>Foreign Trips: </b>There is a Foreign Trips page in the website which provides the prudent information about the famous and popular tourist spots all over the world.</li>
                </ul>
                <Link to="https://gitlab.com/mahbubur16/travelo" target="_blank">
                <button className="git">View Source Code</button>
                </Link>
        </div>
    </div>





    <div className="second-part">
        <div className="phot">
            <img src={Project4} alt="Intrusion"/>
        </div>

        <div className="detail">
            <h2>04. Intrusion Detection System using Machine Learning</h2>
            <p>This project implements an Intrusion Detection System (IDS) using machine learning techniques.</p>
            <ul style={{ listStyleType: 'disc' }}>
                <li><b>Objective: </b>The goal is to develop a system capable of identifying potential security threats in network
                communication.</li>
                <li><b>Dataset: </b>The NSL-KDD dataset, a widely used benchmark dataset for intrusion detection</li>
                <li><b>Algorithms: </b>Three distinct machine learning algorithms, namely Support Vector Machine (SVM), Decision Tree,
                and Naive Bayes, are utilized to explore diverse approaches for intrusion detection</li>
                <li><b>Workflow: </b>1. Preprocess data, including one-hot encoding and standardization — 2. Split data into training and
                testing sets. — 3. Evaluate models using metrics like accuracy, precision, recall, and F1 score.</li>
                <li><b>Visualization: </b>Generated confusion matrices for model performance overview. Accuracy were shown in
                histograms for three algorithms. Training & Testing time was also illustrated in bar charts.</li>
            </ul>
            <Link to="https://colab.research.google.com/drive/1mQbKkAJTUdwpj9Ku-3tR0S1CUEarJ45M?usp=drive_link#scrollTo=JbMyzIPMMOYS" target="_blank">
            <button className="git">View Source Code</button>
            </Link>
        </div>
    </div>    



    <div className="first-part">
        <div className="photo">
            <img src={Project5} alt="BookWorm"/>
        </div>

        <div className="detail">
            <h2>05. BookWorm—The Book Searching Application</h2>
            <p>BookWorm—The Book Searching App is a React js-based online application
that is easy to use and intuitive. This dynamic application makes use
of web technologies to provide accurate data that comes from a trustworthy
Book API. The key features are: </p>
                <ul style={{ listStyleType: 'disc' }}>
                    <li><b>Comprehensive Data: </b>This book searching app provides a comprehensive range of
                    information, allowing users to easily explore a vast library of books.</li>
                    <li><b>Data Source: </b>The application obtains book info from reliable and respectable sources,
                    guaranteeing each search result’s accuracy and authencity.</li>
                    <li><b>Resposive Design: </b>Designed with user-friendliness in mind, the app features an intuitive
                    and visually appealing interface.</li>
                    
                </ul>
                <Link to="https://gitlab.com/mahbubur16/bookworm" target="_blank">
                <button className="git">View Source Code</button>
                </Link>
        </div>
    </div>



    <div className="second-part">
        <div className="phot">
            <img src={Project6} alt="Cat or Dog"/>
        </div>

        <div className="detail">
            <h2>06. Image Classification Using Transfer Learning</h2>
            <p>Developed a state-of-the-art animal classification model by leveraging Transfer Learning techniques. Utilized the Kaggle Dogs vs Cats dataset as the foundation for training. Employed MobileNet V2, a powerful pretrained deep learning model, to achieve high accuracy in distinguishing between cats and dogs.</p>
            <Link to="https://colab.research.google.com/drive/1fdXa1ldqbhVMd7duhADbjGQMVo1CxzDN?usp=sharing" target="_blank">
            <button className="git">View Source Code</button>
            </Link>
        </div>
    </div>



    <div className="first-part">
        <div className="photo">
            <img src={Project7} alt="Football"/>
        </div>

        <div className="detail">
            <h2>07. Football Data Analysis & Visualization with Python</h2>
            <p>Analyzed and visualized multifaceted elements of the English Premier League 2021-22 Season using Python. Utilized the EPL22 dataset for this work. Delved into various aspects, including top 10 goalscorers, assist providers, player nationalities, total team assists and goals, calculating the average team squad statistics as well as many other aspects of the season. The project involved extensive data analysis and visualization techniques, showcasing comprehensive insights into the season’s performance and player statistics.</p>
            
            <Link to="https://colab.research.google.com/drive/1iIjvw3I7j_UqZolsW1zvIVXIPltR3nPe?usp=sharing" target="_blank">
            <button className="git">View Source Code</button>
            </Link>
        </div>
    </div>



    <div className="second-part">
        <div className="phot">
            <img src={Project8} alt="Heart"/>
        </div>
        <div className="detail">
            <h2>08. Heart Disease Prediction using Machine Learning</h2>
            <p>Developed a predictive model to detect and classify heart disease using
machine learning techniques. Employed logistic regression, a powerful
classification algorithm, to build the predictive model. Used Kaggle
Heart Disease dataset.</p>
            <Link to="https://colab.research.google.com/drive/1qeG0YnO_5IR9hAq7XTZU6DSLpNdOQxJT?usp=sharing" target="_blank">
            <button className="git">View Source Code</button>
            </Link>
        </div>
    </div>




    <div className="first-part">
        <div className="photo">
            <img src={Project9} alt="Arduino"/>
        </div>
        <div className="detail">
            <h2>09. Theft Detection System using Arduino</h2>
            <p>An Arduino based anti-theft system using RFID and Bluetooth modules. The registration process is done using RFID. Each device is tagged with a Bluetooth module and there will also be a central Bluetooth module. If a device is taken out of a Bluetooth range, a sound will beep or a red light will be on. This solution is suitable for Laboratories, Shopping malls, etc. </p>
            <Link to="https://gitlab.com/mahbubur16/theft-detection-system-using-arduino" target="_blank">
            <button className="git">View Source Code</button>
            </Link>
        </div>
    </div> 


    <div className="second-part">
        <div className="phot">
            <img src={Project10} alt="QA"/>
        </div>
        <div className="detail">
            <h2>10. QAsite--- A Question-Answer Website</h2>
            <ul style={{ listStyleType: 'disc' }}>
                <li>A question and answer based Online platform.</li>
                <li>A user can ask any question and also answer others’ questions.</li>
                <li>Used Languages/Technologies: php, sql</li>
            </ul>
            <Link to="https://gitlab.com/mahbubur16/qasite" target="_blank">
            <button className="git">View Source Code</button>
            </Link>
        </div>
    </div>


    </div>    
  )
}

export default ProjectList