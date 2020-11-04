import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const AppRouter = () => (
	<Router>
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/register" component={Register} exact={true} />
		</Switch>
	</Router>
);

export default AppRouter;
