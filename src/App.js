import './App.css';
import Approuter from "./router/Router"
import FoodCardBank from "./components/FoodBankcard/FoodBankCard"
import Location from "./components/Location/Location"
function App() {
  return (
    <div className="App">
      <Approuter />
      {/* <Location /> */}
      {/* <FoodCardBank /> */}
    </div>
  );
}

export default App;
