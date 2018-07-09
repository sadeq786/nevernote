import axios from "axios";

export default {
    // get todos from /api/todos route on express server
    getTodos: function () {
        return axios.get("/api/todos");
    },
    // Create a todo by making a POST request to /api/todo on the Express server
    createNewTodo: function (newTodo) {
        return axios.post("/api/todo", newTodo);
    }
};