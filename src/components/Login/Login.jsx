import {useState} from "react"
import axios from "axios"
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitlogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/user/login", {
            email:email,
            password:password,
        }).then(res => {
            console.log("successfully logged in");
        }).catch(err => {
            console.log("Error in register");
            console.log(err);
        })
    }
    return (
        <form>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={submitlogin}>Register</button>
        </form>
    )
}

export default Register;