import express,{Router} from 'express';

const router = Router();

router.get('/', (req,res)=>{
    res.status(200).json({
        message: 'user authentication'
    })
});

export default router;