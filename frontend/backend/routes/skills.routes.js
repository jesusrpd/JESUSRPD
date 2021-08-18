import {Router} from 'express';
import {getSkills, createSkill, deleteSkill} from '../controllers/skills.controller';
const route = Router();

route.get('/', getSkills);

route.post('/', createSkill);

route.delete('/:id', deleteSkill);

export default route;