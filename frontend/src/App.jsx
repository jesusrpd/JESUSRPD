import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Aboutme from './pages/Aboutme';
import Briefcase from './pages/Briefcase';
import Contactme from './pages/Contactme';
import Skills from './pages/Skills';
import {PATH_WELCOME, PATH_ABOUTME, PATH_CONTACTME, PATH_SKILLS, PATH_BRIEFCASE} from './routes/paths.routes';

const App = ()=>(
    <Router>
        <Switch>
            <Route exact path={PATH_WELCOME} component={Welcome}/>
            <Route path={PATH_ABOUTME} component={Aboutme}/>
            <Route path={PATH_BRIEFCASE} component={Briefcase}/>
            <Route path={PATH_SKILLS} component={Skills}/>
            <Route path={PATH_CONTACTME} component={Contactme}/>
        </Switch>
    </Router>   
);

export default App;