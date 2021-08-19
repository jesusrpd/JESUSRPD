import React from "react";
import LoadSkill from "./LoadSkill";

const SkillsWeb = ({lenguagues}) => (
    <>
        {lenguagues.map((lenguague) => (
            <LoadSkill
                key={lenguague._id}
                name={lenguague.name}
                port={lenguague.port}
                background={lenguague.background}
                color={lenguague.color}
                clases={lenguague.clases}
            />
        ))}
    </>
);

export default SkillsWeb;
