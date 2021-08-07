import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => (
    <nav className="nav">
        <p className="nav-brand">JR</p>
        <ul>
            <li>
                <Link to="/" className="nav-link" href="">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/aboutme" className="nav-link" href="">
                    About me
                </Link>
            </li>
            <li>
                <Link to="/briefcase" className="nav-link" href="">
                    Birefcase
                </Link>
            </li>
            <li>
                <Link to="/skills" className="nav-link" href="">
                    Skills
                </Link>
            </li>
            <li>
                <Link to="/contactme" className="nav-link" href="">
                    Contact me
                </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
