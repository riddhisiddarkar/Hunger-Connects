import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav>
          <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <ul class="open navlinks">
            <li class="navlink" id="company">
              HUNGER CONNECT
            </li>
            <li class="navlink" id="aboutus">
              About us
            </li>
            <Link to="/foodbanks">
            <li class="navlink" id="foodbanks">
              Food banks
            </li></Link>
            <li class="navlink" id="contactme">
              Contact Us  
            </li>
            <li class="navlink" id="login">
              Logout
            </li>
            <li class="navlink" id="Donate">
              Donate
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
