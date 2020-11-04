import {useState} from "react"
import axios from "axios"
function Register() {
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
        }).catch(err => {
            console.log("Error in register");
            console.log(err);
        })
    }
    return (
        <form>
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="cpassword" onChange={(e) => setCpassword(e.target.value)} />
            <button type="submit" onClick={submitlogin}>Register</button>
        </form>
    )
}

export default Register;