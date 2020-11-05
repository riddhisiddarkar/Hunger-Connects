import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
    return (
        <div className="back-img">
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