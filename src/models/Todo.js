import axios from 'axios';

const endPoint = `https://sei-111-todo-backend.herokuapp.com/todos`;

// define a regular class
class TodoModel {
    // is define a mthod to get all todos
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    }
    static create = (todo) => {
        // post requrest sending the todo object as the second argument
        let request = axios.post(endPoint, todo);
        return request;
    }
    // methods to update delete etc.
}

export default TodoModel;