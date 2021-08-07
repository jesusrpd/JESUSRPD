import React from "react";
import IconLinkedin from '../assets/SVG/linkedin.svg';
import IconGitHub from '../assets/SVG/github.svg';
import IconInstagram from '../assets/SVG/instagram.svg';
import IconWhatsapp from '../assets/SVG/whatsapp.svg';
import IconFacebok from '../assets/SVG/facebook.svg';
import IconGmail from '../assets/SVG/gmail.svg';

const Redes = () => (
    <div className="redes">
        <a href="">
            <img className="redes-icon" src={IconFacebok} alt="Icon from Facebook" />
        </a>
        <a href="">
            <img className="redes-icon" src={IconWhatsapp} alt="Icon from whatsApp" />
        </a>
        <a href="">
            <img className="redes-icon" src={IconGmail} alt="Icon from gmail" />
        </a>
        <a href="">
            <img className="redes-icon" src={IconInstagram} alt="Icon from instagram" />
        </a>
        <a href="">
            <img className="redes-icon" src={IconGitHub} alt="Icon from github" />
        </a>
        <a href="">
            <img className="redes-icon" src={IconLinkedin} alt="Icon from linkedin" />
        </a>
    </div>
);

export default Redes;
