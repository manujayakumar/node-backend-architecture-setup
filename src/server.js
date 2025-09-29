import express from 'express';
import apiRoute from './routes/index.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 4001

app.use('/api', apiRoute);

app.listen(PORT, ()=>{
    console.log(`The server is successfully running on PORT: ${PORT}`)
})