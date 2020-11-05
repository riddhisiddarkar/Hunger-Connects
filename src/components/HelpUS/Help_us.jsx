import "./HelpUS.css"
import {useState, useEffect} from "react"
import Axios from "axios"

function Help_us({history}) {
    const [number, setnumber] = useState()
    useEffect(() => {
        if (!localStorage.getItem("hungerconnects"))
        history.push("/login")
        axios.post("http://localhost:5000/user/idverify", {
            id: localStorage.getItem("hungerconnects")
        }).catch(err => {
            history.push("/login")
        })
    })
    const addtolist = (e) => {
        e.preventDefault()
        let children=false;
        let parents=false;
        const childbox = document.getElementById("childbox")
        const parentbox = document.getElementById("parentbox")
        const thanks = document.getElementById("thanks")
        if (childbox.checked == true)
            children=true
        if (parentbox.checked == true)
            parents = true
        const object = {
            number,children,parents
        }
        // Axios.post("http://localhost:5000/admin/addtohungrylist", object)
        //     .then(res => {
        //         console.log("Success");
        thanks.style.display = "block"
        history.push("/")
        // })
    }
    return (
        <div className="background">
            <div className="over-lay">
                 <p className="thanksmessage" id="thanks">Thank you! We shall try to help</p>
                <h2>Help Through Us</h2>
                <form action="">
                <label className="inpLabel">
                    <h3>Number of people:</h3>
                        <input type="text" className="inputarea" onChange={(e)=>setnumber(e.target.value)}/>
                    <h6>(Put approximate number)</h6>
                </label>
                <div className="inpLabel2">
                <input type="checkbox" className="children" name="children" value="Child" id="childbox"/>
                <label for="children" className="l2"> Are there any children?</label><br></br>
                </div>
                <div className="inpLabel2">
                <input type="checkbox" className="senior_citizen" name="senior_citizen" value="Old" id="parentbox"/>
                <label for="senior_citizen" className="l3"> Are there any senior citizens?</label><br></br>
                </div>
                    <button type="submit" className="submit_btn" onClick={addtolist}>SUBMIT</button>
             </form>
            </div>
        </div>
    )
}

export default Help_us;