import "./PrbSlv.css";
import Leet from "../asset/Leet.png";
import Code from "../asset/code.png";
import Hack from "../asset/hacker.png";

import React from 'react'
import { Link } from "react-router-dom";

const PrbSlv = () => {
  return (
    <div className="prb">
        <div className="top">
            <h1><b>Online Problem Solving</b></h1>
            <p>Solved over 200 problems LightOJ, Hackerrank, Codeforces, LeetCode, UVA, Codechef and others with various difficulties on topics such as data structure, algorithm, dynamic programming, geometry etc.</p>

        </div>

        <div className="bottom">
            <div className="profile-column">
            <img src={Leet} alt="LeetCode Logo" />
            <Link to="/https://leetcode.com/u/Mahbubur_Rahman_Durlov/">
            <h3>LeetCode profile</h3>
            </Link>
            <ul>
                <p>Total Solved : 170</p>
                <p>Easy: 113</p>
                <p>Medium: 51</p>
                <p>Hard: 6</p>
           </ul>
            </div>

            <div className="profile-column">
            <img src={Hack} alt="HackerRank Logo" />
            <Link to="/https://www.hackerrank.com/profile/Durlov_Rahman">
            <h3>HackerRank profile</h3>
            </Link>
            <p>4 Star in Problem solving</p>
            <p>2 start in SQL</p>
            </div>

            <div className="profile-column">
            <img src={Code} alt="Codeforces Logo" />
            <Link to="/https://codeforces.com/profile/Durlov">
            <h3>Codeforces profile</h3>
            </Link>
            <p>Solved: 41</p>
            </div>


        </div>
    </div>
  )
}

export default PrbSlv