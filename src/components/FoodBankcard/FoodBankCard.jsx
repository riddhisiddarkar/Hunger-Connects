import "./FoodBankCard.css"
function FoodBankCard({foodbank}) {
    return (
        <div className="cardmaindiv">
            <div className="foodbankname">
                <p>{foodbank.name}</p>
            </div>
            <img src={foodbank.image}alt="Food Bank Image" className="foodbankimage" />
            <div className="foodbankdetails">
                <p className="foodbackmoto">{foodbank.moto}</p>
                <p className="foodbankcontact">Address : <span>{foodbank.address}</span></p>
                <p className="foodbankcontact">Contact : <span>{foodbank.phoneno}</span></p>
            <div className="viewwebsite"><a href={`${foodbank.website}`}>View Website</a></div>
            </div>
        </div>
    )
}

export default FoodBankCard
