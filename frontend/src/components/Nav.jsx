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
    let history = useHistory();

    const handleTab = (i) => {
        setTab(i);
    };

    useEffect(() => {
        switch (history.location.pathname) {
            case PATH_WELCOME:
                setTab(0);
                break;
            case PATH_ABOUTME:
                setTab(1);
                break;
            case PATH_BRIEFCASE:
                setTab(2);
                break;
            case PATH_SKILLS:
                setTab(3);
                break;
            case PATH_CONTACTME:
                setTab(4);
                break;
            default:
                return tab;
        }
    }, []);

    useEffect(() => {
        if (history.location.pathname === PATH_ABOUTME) {
            setLight(true);
        } else {
            setLight(false);
        }
    }, [PATH_ABOUTME, tab]);

    return (
        <nav className="nav d-flex j-between">
            <p className={light ? "nav-brand-light" : "nav-brand"}>JR</p>
            <ul>
                <li>
                    <Link
                        to={PATH_WELCOME}
                        onClick={() => handleTab(0)}
                        className={
                            light
                                ? tab === 0
                                    ? "nav-link-light tab-link"
                                    : "nav-link-light"
                                : tab === 0
                                ? "nav-link tab"
                                : "nav-link"
                        }>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to={PATH_ABOUTME}
                        onClick={() => handleTab(1)}
                        className={
                            light
                                ? tab === 1
                                    ? "nav-link-light tab-light"
                                    : "nav-link-light"
                                : tab === 1
                                ? "nav-link tab"
                                : "nav-link"
                        }>
                        About me
                    </Link>
                </li>
                <li>
                    <Link
                        to={PATH_BRIEFCASE}
                        onClick={() => handleTab(2)}
                        className={
                            light
                                ? tab === 2
                                    ? "nav-link-light tab-light"
                                    : "nav-link-light"
                                : tab === 2
                                ? "nav-link tab"
                                : "nav-link"
                        }>
                        Birefcase
                    </Link>
                </li>
                <li>
                    <Link
                        to={PATH_SKILLS}
                        onClick={() => handleTab(3)}
                        className={
                            light
                                ? tab === 3
                                    ? "nav-link-light tab-light"
                                    : "nav-link-light"
                                : tab === 3
                                ? "nav-link tab"
                                : "nav-link"
                        }>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to={PATH_CONTACTME}
                        onClick={() => handleTab(4)}
                        className={
                            light
                                ? tab === 4
                                    ? "nav-link-light tab"
                                    : "nav-link-light"
                                : tab === 4
                                ? "nav-link tab"
                                : "nav-link"
                        }>
                        Contact me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
