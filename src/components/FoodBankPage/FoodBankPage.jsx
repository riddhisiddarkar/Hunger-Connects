import "./FoodBankPage.css"
import { useState, useEffect } from "react";
import axios from "axios"
import FoodBankCard from "../FoodBankcard/FoodBankCard";
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
function FoodBankPage({ match }) {
    const [location, setlocation] = useState([])
    console.log(match.params.location);
    useEffect(() => {
                if (!localStorage.getItem("hungerconnects"))
            history.push("/login")
        axios.post("http://localhost:5000/user/idverify", {
            id: localStorage.getItem("hungerconnects")
        }).then(() => {
            axios.get("http://localhost:5000/foodbanks/localisedfoodbanks/" + match.params.location)
                .then(res => {
                    console.log(res.data);
                    setlocation(res.data)
                }).catch(err => {
                    console.log(err);
                })
        })
    }, [])
    useEffect(() => {
    }, [location])
    return (
        <>
            <Navbar />
            <div>Panaji</div>
        <div className="FoodBankPage" >
            {
                location.map((e,i)=><FoodBankCard key={i} foodbank={e} />)
            }
            <Link className="connectingbutton" to="/tellus">Or let us know?</Link>
            </div>
            </>
    )
}

export default FoodBankPage
