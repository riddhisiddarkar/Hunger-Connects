import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import FoodBankPage from "../components/FoodBankPage/FoodBankPage";
import Location from "../components/Location/Location"
import AllFoodBanks from "../components/AllFoodBanks/AllFoodBanks";
import Help_us from "../components/HelpUS/Help_us";
import Navbar from "../components/Navbar/Navbar";
const AppRouter = () => (
	<Router>
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/foodbank/:location" component={FoodBankPage} exact={true} />
            <Route path="/location" component={Location} exact={true} />
            <Route path="/foodbanks" component={AllFoodBanks} exact={true} />
            <Route path="/tellus" component={Help_us} exact={true} />
            {/* <Route path="/navbar" component={Navbar} exact={true} /> */}
		</Switch>
	</Router>
);

export default AppRouter;
