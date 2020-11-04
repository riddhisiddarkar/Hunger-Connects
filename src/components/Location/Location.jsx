import "./Location.css"
function Location() {
    return (
        <div className="back">
            <div className="over">
                <h3>Find nearest Food bank to the entered location</h3>
            </div>
            <form action="">
             <select className="Areas" name="Area">
               <option selected disabled>Enter Location</option>
               <option value="margao">Margao</option>
               <option value="panjim">Panjim</option>
               <option value="ponda">Ponda</option>
               <option value="vasco">Vasco</option>
             </select>
             <button type="submit" className="send_loc">SEND LOCATION</button>
             </form>
        </div>
    )
}

export default Location;