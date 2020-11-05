import {useState} from "react"
import "./Location.css"
function Location({history}) {
    const [location, setLocation] = useState("");
    const sendlocation = () => {
        history.push("/foodbank/"+location)
    }
    return (
        <div className="back">
            <div className="over">
                <h3>Find nearest Food bank to the entered location</h3>
            </div>
            <form action="">
             <select className="Areas" name="Area"  onChange={(e)=>{setLocation(e.target.value)}}>
               <option selected disabled>Enter Location</option>
               <option value="Margao">Margao</option>
               <option value="Panjim">Panjim</option>
               <option value="Ponda">Ponda</option>
               <option value="Vasco">Vasco</option>
             </select>
             <button type="submit" className="send_loc" onClick={sendlocation}>SEND LOCATION</button>
             </form>
        </div>
    )
}

export default Location;