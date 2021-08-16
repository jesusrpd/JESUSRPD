import React from "react";
import IconLinkedin from "../assets/SVG/linkedin.svg";
import IconGitHub from "../assets/SVG/github.svg";
import IconInstagram from "../assets/SVG/instagram.svg";
import IconWhatsapp from "../assets/SVG/whatsapp.svg";
import IconFacebook from "../assets/SVG/facebook.svg";

const Redes = ({ flex }) => (
    <div className={flex === undefined ? "redes d-flex column" : "row"}>
        <a
            href="https://www.facebook.com/profile.php?id=100008217585249"
            target="_blank">
            <IconFacebook className="redes-icon"/>
        </a>
        <a
            target="_blank"
            href="https://api.whatsapp.com/api/send?phone=5537046181">
            <IconWhatsapp className="redes-icon"/>
        </a>
        <a target="_blank" href="https://www.instagram.com/jesusjrpd">
            <IconInstagram className="redes-icon"/>
        </a>
        <a target="_blank" href="https://github.com/jesusrpd">
            <IconGitHub className="redes-icon"/>
        </a>
        <a
            target="_blank"
            href="https://www.linkedin.com/in/jesus-rodrigo-perez-delgado-44855b177">
            <IconLinkedin className="redes-icon"/>
        </a>
    </div>
);

export default Redes;
