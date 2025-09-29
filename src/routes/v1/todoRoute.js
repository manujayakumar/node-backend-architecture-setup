import express,{Router} from 'express';

const router = Router();

router.get('/', (req,res)=>{
    res.status(200).json({
        message: 'Get all todo list'
    })
});

export default router;