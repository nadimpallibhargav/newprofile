import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ProfilePic from '../assets/images/Nadimpalli-Bhargav-Image.jpg'

const Header = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="nav flex-column fixed-side">
          <li className="nav-item deselect text-center">
            <img
              src={ProfilePic}
              className="img-thumbnail"
              alt="profile image"
            />
          </li>
          <li>
            <br />
            <hr />
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link btn btn-block btn-light" >About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" className="nav-link btn btn-block btn-light" >Skills</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/work" className="nav-link btn btn-block btn-light" >Work</NavLink>
          </li>                    
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link btn btn-block btn-light" >Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>  
  )
}

export default Header