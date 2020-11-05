import './App.css';
import Approuter from "./router/Router"
import FoodCardBank from "./components/FoodBankcard/FoodBankCard"
import Location from "./components/Location/Location"
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
      {/* <Approuter /> */}
      {/* <Location></Location> */}
      {/* <FoodCardBank /> */}
      {/* <Register></Register> */}
      <Login></Login>
    </div>
  );
}

export default App;
