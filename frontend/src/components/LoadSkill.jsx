import React from "react";

const LoadSkill = ({leng, leftColor, rightColor, port}) => (
    <div className="d-flex item-center">
        <div className='load' style={{backgroundImage: `linear-gradient(45deg, ${leftColor}, ${rightColor})`,
        width: `${port}%`
    }}>
            <p>{leng}</p>
        </div>
        <p className="load-num">{port}%</p>
    </div>
);

export default LoadSkill;
