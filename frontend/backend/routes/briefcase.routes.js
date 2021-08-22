import {Router} from 'express';
import {getBriefcases, createBriefcase, updateBriefcase, deleteBriefcase, categoryBriefcase } from '../controllers/briefcase.controller';
const route = Router();

route.get('/', getBriefcases);

route.post('/', createBriefcase);

route.put('/:id', updateBriefcase);

route.delete('/', deleteBriefcase);

route.get('/:category', categoryBriefcase);

export default route;