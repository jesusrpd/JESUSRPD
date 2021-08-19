import React, { useEffect } from "react";
import {PATH_API} from '../routes/paths.routes';
import SkillsLenguagues from './SkillsLenguagues';
import useSkill from '../hooks/useSkills';

const SkillWeb = ( ) => {

    const {skill} = useSkill(`${PATH_API}/skills/web`);

    return (
        <div className="skills-web">
            <h3>Web development</h3>
            <div className="d-flex column">
                <SkillsLenguagues lenguagues={skill} />
            </div>
        </div>
    );
};

export default SkillWeb;
