import {Router} from 'express';
import {getSkills, createSkill, deleteSkill, updateSkill, getCategory} from '../controllers/skills.controller';
const route = Router();

route.get('/', getSkills);

route.post('/', createSkill);

route.delete('/:id', deleteSkill);

route.put('/:id', updateSkill);

route.get('/:category', getCategory)

export default route;