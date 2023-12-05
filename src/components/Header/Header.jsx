import React from 'react'
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
      <div className="headerCont">
      <span className="logoImg"></span>
      <div className="context"> DermDetect </div>
      <div className="navBar">
        <Link to="/">
          <div className="headerBtn">Home</div>
        </Link>
        <Link to="/search">
          <div className="headerBtn">Search</div>
        </Link>
        <Link to="/about">
          <div className="headerBtn">About</div>
        </Link>
      </div>
    </div>
  )
}

export default Header