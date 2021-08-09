import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    const [tab, setTab] = useState(0);

    const handleTab = i =>{
        setTab(i);
    };

    return (
        <nav className="nav d-flex j-between">
            <p className="nav-brand">JR</p>
            <ul>
                <li>
                    <Link to="/" onClick={()=> handleTab(0)} className={tab === 0 ? "nav-link tab": 'nav-link'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/aboutme" onClick={()=> handleTab(1)} className={tab === 1 ? "nav-link tab": 'nav-link'}>
                        About me
                    </Link>
                </li>
                <li>
                    <Link to="/briefcase" onClick={()=> handleTab(2)} className={tab === 2 ? "nav-link tab": 'nav-link'}>
                        Birefcase
                    </Link>
                </li>
                <li>
                    <Link to="/skills" onClick={()=> handleTab(3)} className={tab === 3 ? "nav-link tab": 'nav-link'}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="/contactme" onClick={()=> handleTab(4)} className={tab === 4 ? "nav-link tab": 'nav-link'}>
                        Contact me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
