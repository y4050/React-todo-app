import { useState, useEffect } from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm'

export default function TodosContainer(){
    const [todos, setTodos] = useState([])

    useEffect(()=> {
        const fetchData = async()=> {
            const res = await TodoModel.all()
            console.log(res)
            setTodos(res.data)
        }
        fetchData()
    }, [])
    
    const createTodo = async(todo) => {
        let newTodo = {
            body: todo,
            completed: false
        }
        const anotherTodo = await TodoModel.create(newTodo);
        console.log(anotherTodo)
        // taking the current list with spread, then add new to the end
        setTodos([...todos, anotherTodo.data]);
    }

    const deleteTodo = async(todo) => {
        console.log(todo)
        // talk to database
        const deletedTodo = await TodoModel.delete(todo)
        console.log(deletedTodo)
        let tempTodos = [...todos].filter((eachTodo) => {
            return eachTodo._id !== deletedTodo.data._id
        });
        setTodos(tempTodos)
        // will have to update state
    }

    return (
        <div className='todosContainer'>
            <CreateTodoForm createTodo={createTodo}/>
            <Todos todos={todos} deleteTodo={deleteTodo} />
            <h1>TodosContainer</h1>
        </div>
    );
}