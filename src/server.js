import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 4001

app.get('/', (req, res)=>{
    
    res.status(200).json({
        message: "OK"
    })
});

app.listen(PORT, ()=>{
    console.log(`The server is successfully running on PORT: ${PORT}`)
})