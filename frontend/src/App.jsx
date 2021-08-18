import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Aboutme from "./pages/Aboutme";
import Briefcase from "./pages/Briefcase";
import Contactme from "./pages/Contactme";
import Skills from "./pages/Skills";
import Design from './pages/Design';
import Web from './pages/Web';
import {
    PATH_WELCOME,
    PATH_ABOUTME,
    PATH_CONTACTME,
    PATH_SKILLS,
    PATH_BRIEFCASE,
    PATH_DESIGN,
    PATH_WEB,
} from "./routes/paths.routes";

const App = () => (
    <Router>
        <Switch>
            <Route exact path={PATH_WELCOME} component={Welcome} />
            <Route path={PATH_ABOUTME} component={Aboutme} />
            <Route exact path={PATH_BRIEFCASE} component={Briefcase} />
            <Route path={PATH_SKILLS} component={Skills} />
            <Route path={PATH_CONTACTME} component={Contactme} />
            <Route path={PATH_WEB} component={Web} />
            <Route path={PATH_DESIGN} component={Design} />
        </Switch>
    </Router>
);

export default App;
