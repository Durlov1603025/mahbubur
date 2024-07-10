import { Link } from "react-router-dom";
import "./NavStyle.css"
import { MenuItem } from "./MenuItem";
import React, { Component } from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
    render () {
  return (
    <nav className="NavItems">
        <Link to="/">
        <h1>Mahbubur Rahman</h1>
        </Link>

        <div className="menu-icons" onClick={this.handleClick}>
            {this.state.clicked ? (<FaTimes size={20} style={{color: "black"}} />) : (<FaBars />) }
        </div>


        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
        {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.clName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* <div className="menu-icons"></div> */}
    </nav>
  )
}
}

export default Navbar