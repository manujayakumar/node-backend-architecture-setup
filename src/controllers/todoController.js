import asyncHandler from 'express-async-handler';

const getTodos = asyncHandler(async (req, res)=>{
    const user = req.user;
    res.json({message: "Get all Todos"});
});
const getTodo = asyncHandler(async (req, res)=>{
    const user = req.user;
    res.json({message: "Get Todo by Id"});
});


const createTodo = asyncHandler(async (req, res)=>{
    const {title, description} = req.body;
    console.log(`create todo \n ${title}: ${description}`);
});

const updateTodo = asyncHandler(async(req, res)=>{
    const {title, status, description} = req.body;
    console.log(`Update todo`)
});

const deleteTodo = asyncHandler(async (req,res)=>{
    console.log(`Delete Todo`)
});

export {createTodo, getTodos, getTodo, updateTodo, deleteTodo}