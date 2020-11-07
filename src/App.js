import './App.css';
import Approuter from "./router/Router"
import Footer from "./components/Footer/Footer"
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Approuter /> 
      <Footer />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;