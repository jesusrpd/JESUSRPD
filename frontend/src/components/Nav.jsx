import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
    PATH_SKILLS,
    PATH_WELCOME,
    PATH_BRIEFCASE,
    PATH_ABOUTME,
    PATH_CONTACTME,
} from "../routes/paths.routes";

const Nav = () => {
    const [tab, setTab] = useState(0);
    const [light, setLight] = useState(false);
    let history = useHistory()

    const handleTab = (i) => {
        setTab(i);
    };

    useEffect(()=>{
        console.log(history.location.pathname);
    },[]);

    return (
        <nav className="nav d-flex j-between">
            <p className="nav-brand">JR</p>
            <ul>
                <li>
                    <Link
                        to={PATH_WELCOME}
                        onClick={() => handleTab(0)}
                        className={tab === 0 ? "nav-link tab" : "nav-link"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to={PATH_ABOUTME}
                        onClick={() => handleTab(1)}
                        className={tab === 1 ? "nav-link tab" : "nav-link"}>
                        About me
                    </Link>
                </li>
                <li>
                    <Link
                        to={PATH_BRIEFCASE}
                        onClick={() => handleTab(2)}
                        className={tab === 2 ? "nav-link tab" : "nav-link"}>
                        Birefcase
                    </Link>
                </li>
                <li>
                    <Link
                        to={PATH_SKILLS}
                        onClick={() => handleTab(3)}
                        className={tab === 3 ? "nav-link tab" : "nav-link"}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to={PATH_CONTACTME}
                        onClick={() => handleTab(4)}
                        className={tab === 4 ? "nav-link tab" : "nav-link"}>
                        Contact me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
