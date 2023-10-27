import todo from "../model/todo-schema.js";

// export const addTodo = () => (request, response) => {
//     // console.log(request.body);
//     todo.create({
//         data:request.body.data,
//         createdAt:Date.now()
//     })
//   }

//making async
export const addTodo = async (request, response) => {
    try{
        const newTodo = await todo.create({
            data:request.body.data,
            createdAt:Date.now()
        })
        await newTodo.save();

        return response.status(200).json(newTodo);
    
    } catch (error){
        return response.status(500).json(error.message);
    }

}

export const getAllTodos = async (request, response) => {
    try{
        // await todo.find({}).sort({'createdAt': -1})  //-1 descending
        const todos = await todo.find({}).sort({'createdAt': -1}) 
        return response.status(200).json(todos);
    
    } catch (error){
        return response.status(500).json(error.message);
    }

}

export const toggleCurrentTodo = async (request, response) => {
    try{
        const currentTodo = await todo.findById(request.params.id);
        const updateCurrentTodo = await todo.findOneAndUpdate( {_id:request.params.id} , {done: !currentTodo.done })
        await updateCurrentTodo.save();

        return response.status(200).json(updateCurrentTodo);
    
    } catch (error){
        return response.status(500).json(error.message);
    }

}

export const updateCurrentTodo = async (request, response) => {
    try{
        await todo.findOneAndUpdate( {_id:request.params.id} , {data: request.body.data })
        const currentTodo = await todo.findById(request.params.id);
        return response.status(200).json(currentTodo);
    
    } catch (error){
        return response.status(500).json(error.message);
    }
}

export const deleteCurrentTodo = async (request, response) => {
    try{
        const currentTodo = await todo.findByIdAndDelete(request.params.id);
        return response.status(200).json(currentTodo);
    } catch (error){
        return response.status(500).json(error.message);
    }
}
  