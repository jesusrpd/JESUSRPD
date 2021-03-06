import React from "react";
import { PATH_API } from "../routes/paths.routes";
import useSkill from "../hooks/useSkills";
import SkillsLenguagues from "../components/SkillsLenguagues";

const SkillSoftware = () => {
    const { skill } = useSkill(`${PATH_API}/skills/software`);

    return (
        <div className="skills-software">
            <h3>Software development</h3>
            <div className="d-flex column">
                <SkillsLenguagues lenguagues={skill} />
            </div>
        </div>
    );
};

export default SkillSoftware;
