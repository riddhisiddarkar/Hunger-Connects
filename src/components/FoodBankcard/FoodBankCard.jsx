import "./FoodBankCard.css"
function FoodBankCard() {
    return (
        <div className="cardmaindiv">
            <div className="foodbankname">
                <p>Dheeraj gndhi sanstha of chapli ppl </p>
            </div>
            <img src="https://static01.nyt.com/images/2020/05/14/business/14mcdonalds-1/14mcdonalds-1-mobileMasterAt3x.jpg" alt="Food Bank Image" className="foodbankimage" />
            <div className="foodbankdetails">
                <p className="foodbackmoto">We provide food for the needy without any problems 
                 
                    caused to the people </p>
                <p className="foodbankcontact">Contact : <span> 9834576534</span></p>
            <div className="viewwebsite">View Website</div>
            </div>
        </div>
    )
}

export default FoodBankCard
