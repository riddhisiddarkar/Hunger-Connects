import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
    return (
        <div className="back-img">
            {/* <img className="boyimage" src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> */}
            <div className="overlay">
                <h1>
                    HUNGER CONNECTS<span>.</span>
                </h1>
                <h3>We <span>connect</span> people to the Foodbanks</h3>
                <Link to="/login"><button type="submit">LOGIN</button></Link>
            </div>
        </div>
    )
}
export default Home;