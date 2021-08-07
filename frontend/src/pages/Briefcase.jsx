import React from 'react';
import WebIMG from '../assets/img/webDevelopment.png';
import DesingIMG from '../assets/img/webDesing.png';

const Briefcase = ()=>(
    <section className="briefcase">
        <h2>BRIEFCASE</h2>
        <div className="briefcase-container">
            <div className="briefcase-web">
                <img src={WebIMG} alt="Portada de desarrollo web" />
            </div>
            <div className="briefcase-desing">
                <img src={DesingIMG} alt="Portada de diseno" />
            </div>
        </div>
    </section>
);

export default Briefcase;