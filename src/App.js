import './App.css';
import Approuter from "./router/Router"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Approuter />
      <Footer />
    </div>
  );
}

export default App;
