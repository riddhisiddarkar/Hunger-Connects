import "./HelpUS.css"
function Help_us() {
    return (
        <div className="background">
            <div className="over-lay">
                <h2>Help Through Us</h2>
                <form action="">
                <label className="inpLabel">
                    <h3>Number of people:</h3>
                    <input type="text" className="inputarea"/>
                    <h6>(Put approximate number)</h6>
                </label>
                <div className="inpLabel2">
                <input type="checkbox" id="children" name="children" value="Child"/>
                <label for="children" className="l2"> Are there any children?</label><br></br>
                </div>
                <div className="inpLabel2">
                <input type="checkbox" id="senior_citizen" name="senior_citizen" value="Old"/>
                <label for="senior_citizen" className="l3"> Are there any senior citizens?</label><br></br>
                </div>
                <button type="submit" className="send_loc">SUBMIT</button>
             </form>
            </div>
        </div>
    )
}

export default Help_us;