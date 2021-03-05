import axios from 'axios';

const endPoint = `https://sei-111-todo-backend.herokuapp.com/todos`;

// define a regular class
class TodoModel {
    // is define a mthod to get all todos
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    }
    // methods to update delete etc.
}

export default TodoModel;