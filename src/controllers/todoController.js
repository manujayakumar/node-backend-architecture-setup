export const todoController = {
    getAllTodos(req, res)
    {
        res.json({message:"Get all Todos"})
    },
    getTodoById(req, res){
        const id= req.params.id
        res.json({message:`Get Todo by ID: ${id}`})
    },
    createTodo(req, res){
        res,json({message: "Create Todo"})
    },
    updateTodoById(req, res){
        const id= req.params.id;
        res.json({message: `Update Todo by id : ${id}`})
    },
    deleteTodoById(req, res){
        const id = req.params.id;
        res.json({message: `Delete Todo by id: ${id}`})

    }
}
