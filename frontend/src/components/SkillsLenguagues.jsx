import React from "react";
import LoadSkill from "./LoadSkill";

const SkillsWeb = ({lenguagues}) => (
    <>
        {lenguagues.map((lenguague) => (
            <LoadSkill
                key={lenguague.lenguague}
                leng={lenguague.lenguague}
                port={lenguague.port}
                leftColor={lenguague.leftColor}
                rightColor={lenguague.rightColor}
                clases={lenguague.clases}
            />
        ))}
    </>
);

export default SkillsWeb;
