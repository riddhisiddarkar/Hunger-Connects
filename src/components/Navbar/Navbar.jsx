import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const opennavbar = () => {
    document.querySelectorAll(".line").forEach((element,i) => {
      element.classList.toggle("open")
      console.log(element.classList); 
    });
    document.querySelector(".navlinks").classList.toggle("open")
    }
  return (
    <div>
      <nav>
        <div className="outside_div">
          <div className="hamburger" onClick={opennavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="open navlinks">
            <li className="navlink" id="company">
              HUNGER CONNECT
            </li>
            <li className="navlink" id="aboutus">
              About us
            </li>
            <Link to="/foodbanks">
            <li className="navlink" id="foodbanks">
              Food banks
            </li></Link>
            <li className="navlink" id="contactme">
              Contact Us
            </li>
            <li className="navlink" id="login">
              Logout
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
