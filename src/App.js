import './App.css';
import Approuter from "./router/Router"
import FoodCardBank from "./components/FoodBankcard/FoodBankCard"
import Location from "./components/Location/Location"
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HelpUs from './components/HelpUS/Help_us'
function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Approuter /> */}
      {/* <Location></Location> */}
      {/* <FoodCardBank /> */}
      {/* <Register></Register> */}
      <Login></Login>
      {/* <HelpUs/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
