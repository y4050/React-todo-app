import React from 'react';

const Todo = (props) => {
    // call a function passed through props
    const deleteClickedTodo = () => {
        props.deleteTodo(props.todo)
    }

    return (
            <li data-todos-index={props.todo._id}>
                <span className="todo-item">{props.todo.body}</span>
                <span className="remove" onClick={deleteClickedTodo}>Delete</span>
            </li>
    );
}

export default Todo;
