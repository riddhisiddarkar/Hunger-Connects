import {useState} from "react"
import axios from "axios"
import "./Login.css"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitlogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/user/login", {
            email:email,
            password:password,
        }).then(res => {
            console.log("successfully logged in");
            console.log(res);
            localStorage.setItem("hungereats", res.data);
        }).catch(err => {
            console.log("Error in register");
            console.log(err);
        })
    }
    return (
        <div className="Login">
            <div className="Container-Login">
                <form className="form">
                    <h2>Sign In</h2>
                    <label>
                    <span>Email Address:</span>
                    <input type="text"  onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                    <span>Password:</span>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button className="submit" type="submit" onClick={submitlogin}>Sign In</button>
                    <p className="question">New here?</p>
                    <p className="sign-up-link">Sign Up</p>
                </form>
            </div>
        </div>
    )
}

export default Login;