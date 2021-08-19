import React from "react";

const LoadSkill = ({ name, background, color, port, clases }) => {
    const style = {
        background: `${background}`,
        width: `${port}%`,
    };

    return (
        <div className="d-flex item-center">
            <style>
              
            </style>
            <div className={clases} style={style}>
                <p  style={{color: `${color}`}}>{name}</p>
            </div>
            <p className="load-num">{port}%</p>
        </div>
    );
};

export default LoadSkill;
