import React from "react";

const LoadSkill = ({ leng, leftColor, rightColor, port, clases }) => {
    const style = {
        animation: "colorDinamic 2s ease-in-out infinite",
        backgroundImage: `linear-gradient(45deg, ${leftColor}, ${rightColor})`,
        width: `${port}%`,
    };

    return (
        <div className="d-flex item-center">
            <style>
              
            </style>
            <div className={clases} style={style}>
                <p>{leng}</p>
            </div>
            <p className="load-num">{port}%</p>
        </div>
    );
};

export default LoadSkill;
