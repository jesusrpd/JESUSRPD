import React from "react";
import { PATH_API } from "../routes/paths.routes";
import useSkill from '../hooks/useSkills';

const SkillDesign = () => {

    const { skill } = useSkill(`${PATH_API}/skills/design`);

    return (
        <div className="skills-design">
            <h3>Design</h3>
            <div className="d-flex column">
                <SkillsLenguagues lenguagues={skill} />
            </div>
        </div>
    );
};

export default SkillDesign;
