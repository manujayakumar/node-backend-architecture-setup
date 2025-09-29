import express,{Router} from 'express';
import userRoute from './userRoute.js';
import todoRoute from './todoRoute.js';

const router = Router();

router.use('/user', userRoute);
router.use('/todos', todoRoute);

export default router;