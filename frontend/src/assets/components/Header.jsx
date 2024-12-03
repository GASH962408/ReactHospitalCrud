import React from 'react'
import './Header.css'
const Header = () => {
return(
<nav className="menu">
  <ul>
    <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
    <li><a href="#"><i className="fas fa-laptop-code"></i> Programs</a></li>
    <li><a href="#"><i className="fas fa-user-md"></i> Doctors</a></li>
    <li><a href="#"><i className="fas fa-info-circle"></i> About us</a></li>
  </ul>
</nav>

)
}
export default Header;