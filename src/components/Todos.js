import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    const listOfTodos = props.todos.map((todoData, index)=> {
        return (
            <Todo key={todoData._id} todo={todoData} />
        )
    })

    return (
        <div>
            {listOfTodos}
        </div>
    );
}

export default Todos;
