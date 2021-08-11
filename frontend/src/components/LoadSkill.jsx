import React from "react";

const LoadSkill = ({leng}) => (
    <div className="d-flex item-center">
        <div className="load load-${leng}">
            <p>HTML5</p>
        </div>
        <p className="load-num">100%</p>
    </div>
);

export default LoadSkill;
