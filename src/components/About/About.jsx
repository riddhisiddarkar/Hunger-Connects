import './about.css'
function About() {
  return (
      <div className="ourstory">
        <h1 id="heading">About Us</h1>
        <h2 id="story">
            We have a made a digitized system through which if a user is aware about the areas where people are facing hunger problems then they 
            can just enter that location after which a list of all the nearby Food banks will be shown to the user.
            If the user is willing to contact the Food banks then he can connect through the details provided by us or else
            he can let us know and we go ahead with the reporting of the same. Apart from this the user can even donate to the
              Food Banks connected with us. Our system gives
            the food banks a wider reach to the society and also helps the user to get details of all the food banks at one place.
          </h2>
        <div className="points">
          <div className="grid1">
            <div className="item">
            <h1>Our Moto</h1>
            <h2>
              To help to increase the reach of Food banks by allowing people to easily contact to them.
            </h2>
          </div>
          <div className="item">
            <h1>Our Mission</h1>
            <h2>
              To use technology to solve the problems faced by people in this pandemic
            </h2>
          </div>
          <div className="item">
            <h1>Our Promise</h1>
            <h2>
              To help people in any way posibble without seeing our profit in it.
            </h2>
          </div>
        </div>
      </div>
      <div className="users">
        <h1>Our Reach</h1>
        <div className="grid3">
          <div className="item2">
            <h1>5+</h1>
            <h2>Food banks</h2>
          </div>
          <div className="item2">
            <h1>100+</h1>
            <h2>Volunteers</h2>
          </div>
          <div className="item2">
            <h1>500+</h1>
            <h2>Smiling Faces</h2>
          </div>
        </div>
      </div>
</div>
  )
}

export default About;
