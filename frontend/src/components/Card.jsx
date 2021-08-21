import React from "react";

const Card = ({ items }) => {

    const style = {color: `${items.color}`}

    return (
        <div style={{background: `${items.background}`}} className="briefcase-card d-flex item-center">
            <div>
                <img
                    className="briefcase-card-port"
                    src={items.portImg}
                    alt=""
                />
            </div>
            <div className="briefcase-card-info">
                <h3 style={style}>{items.title}</h3>
                <p style={style}>{items.description}</p>
                <div className="d-flex item-center briefcase-tec">
                    <a style={{background: `${items.color}`, color: `${items.background}`}} href="#" className="briefcase-card-btn">
                        Visitar
                    </a>
                    <div className="briefcase-tecnologias">
                        <h4 style={style}>Tecnologías usadas:</h4>
                        <div className="d-flex item-center j-center">
                            {items.icons.map((icon, index) => (
                                <img
                                    key={index}
                                    src={icon}
                                    width="30px"
                                    className="briefcase-tecnologias-icon"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
