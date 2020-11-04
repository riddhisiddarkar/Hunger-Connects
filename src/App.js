import './App.css';
import Approuter from "./router/Router"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Location from "./components/Location/Location"
function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Approuter /> */}
      <Location></Location>
      {/* <Footer /> */}
    </div>
  );
}

export default App;