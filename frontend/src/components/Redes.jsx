import React from "react";
import IconLinkedin from "../assets/SVG/linkedin.svg";
import IconGitHub from "../assets/SVG/github.svg";
import IconInstagram from "../assets/SVG/instagram.svg";
import IconWhatsapp from "../assets/SVG/whatsapp.svg";
import IconFacebok from "../assets/SVG/facebook.svg";

const Redes = () => (
    <div className="redes">
        <a
            href="https://www.facebook.com/profile.php?id=100008217585249"
            target="_blank">
            <img
                className="redes-icon"
                src={IconFacebok}
                alt="Icon from Facebook"
            />
        </a>
        <a
            target="_blank"
            href="https://api.whatsapp.com/api/send?phone=5537046181">
            <img
                className="redes-icon"
                src={IconWhatsapp}
                alt="Icon from whatsApp"
            />
        </a>
        <a target="_blank" href="https://www.instagram.com/jesusjrpd">
            <img
                className="redes-icon"
                src={IconInstagram}
                alt="Icon from instagram"
            />
        </a>
        <a target="_blank" href="https://github.com/jesusrpd">
            <img
                className="redes-icon"
                src={IconGitHub}
                alt="Icon from github"
            />
        </a>
        <a
            target="_blank"
            href="https://www.linkedin.com/in/jesus-rodrigo-perez-delgado-44855b177">
            <img
                className="redes-icon"
                src={IconLinkedin}
                alt="Icon from linkedin"
            />
        </a>
    </div>
);

export default Redes;
