import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Aboutme from './pages/Aboutme';
import Briefcase from './pages/Briefcase';
import Contactme from './pages/Contactme';
import Skills from './pages/Skills';
import Nav from './components/Nav';
import Redes from "./components/Redes";

const App = ()=>(
    <Router>
        <Nav/>
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/aboutme" component={Aboutme}/>
            <Route path="/briefcase" component={Briefcase}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contactme" component={Contactme}/>
        </Switch>
    </Router>   
);

export default App;