import {useState} from "react"
import axios from "axios"
function Register({history}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const submitlogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/user/register", {
            name:name,
            email:email,
            password:password,
            cpassword:cpassword
        }).then(res => {
            console.log("successfully added data");
            history.push("/login")
        }).catch(err => {
            console.log("Error in register");
            console.log(err);
        })
    }
    return (
        <div className="Login">
            <div className="Container-SignUp">
                <form className="form">
                    <h2>Sign Up</h2>
                    <label>
                    <span>Name:</span>
                    <input type="text"  onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                    <span>Email Address:</span>
                    <input type="text"  onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                    <span>Password:</span>
                    <input type="text"  onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label>
                    <span>Confirm Password:</span>
                    <input type="text"  onChange={(e) => setCpassword(e.target.value)} />
                    </label>
                    <button className="submit" type="submit" onClick={submitlogin}>Sign Up</button>
                    <p className="question">Already a member?</p>
                    <p className="sign-up-link">Sign In</p>
                </form>
            </div>
        </div>
    )
}

export default Register;