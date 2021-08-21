import React, { useEffect, useState } from "react";
import {ReactComponent as IconLinkedin} from "../assets/SVG/linkedin.svg";
import {ReactComponent as IconGitHub} from "../assets/SVG/github.svg";
import {ReactComponent as IconInstagram} from "../assets/SVG/instagram.svg";
import {ReactComponent as IconWhatsapp} from "../assets/SVG/whatsapp.svg";
import {ReactComponent as IconFacebook} from "../assets/SVG/facebook.svg";
import { useHistory } from "react-router-dom";
import { PATH_ABOUTME } from "../routes/paths.routes";

const Redes = ({ flex }) => {
    let history = useHistory();
    const [light, setLight] = useState(false);  

    useEffect(() => {
        if (history.location.pathname === PATH_ABOUTME) {
            setLight(true);
        } else {
            setLight(false);
        }
    });

    return (
        <div className={flex === undefined ? "redes d-flex column" : "row"}>
            <a
                href="https://www.facebook.com/profile.php?id=100008217585249"
                target="_blank">
                <IconFacebook
                    className={light ? "redes-icon light" : "redes-icon blue"}
                />
            </a>
            <a
                target="_blank"
                href="https://api.whatsapp.com/api/send?phone=5537046181">
                <IconWhatsapp
                    className={light ? "redes-icon light" : "redes-icon blue"}
                />
            </a>
            <a target="_blank" href="https://www.instagram.com/jesusjrpd">
                <IconInstagram
                    className={light ? "redes-icon light" : "redes-icon blue"}
                />
            </a>
            <a target="_blank" href="https://github.com/jesusrpd">
                <IconGitHub
                    className={light ? "redes-icon light" : "redes-icon blue"}
                />
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/jesus-rodrigo-perez-delgado-44855b177">
                <IconLinkedin
                    className={light ? "redes-icon light" : "redes-icon blue"}
                />
            </a>
        </div>
    );
};

export default Redes;
