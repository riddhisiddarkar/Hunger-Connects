import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav>
        <div class="outside_div">
          <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <ul class="navlinks">
            <li class="navlink" id="aboutusmain">
              hello
            </li>
            <li class="navlink" id="techinjust">
              Technologies
            </li>
            <li class="navlink" id="contactme">
              Contact me
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
