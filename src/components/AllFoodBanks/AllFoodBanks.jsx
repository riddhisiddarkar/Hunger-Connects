import "../FoodBankcard/FoodBankCard.css"
import { useState, useEffect } from "react";
import axios from "axios"
import FoodBankCard from "../FoodBankcard/FoodBankCard"
import Navbar from "../Navbar/Navbar"
function AllFoodBanks({ match, history }) {
    const [location, setlocation] = useState([])
    useEffect(() => {
        if (!localStorage.getItem("hungerconnects"))
            history.push("/login")
        // axios.post("http://localhost:5000/user/idverify", {
            // id: localStorage.getItem("hungerconnects")
        // }).then(() => {
            axios.get("http://localhost:5000/foodbanks/")
                .then(res => {
                    console.log(res.data);
                    setlocation(res.data)
                }).catch(err => {
                    console.log(err);
                })
        // })
    }, []);
    useEffect(() => {
    }, [location])
    return (
        <>
            <Navbar />
        <div className="FoodBankPage" >
            {
                location.map((e,i)=><FoodBankCard key={i} foodbank={e} />)
                }
            </div>
            </>
    )
}

export default AllFoodBanks
