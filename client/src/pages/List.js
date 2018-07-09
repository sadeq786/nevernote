import React, { Component } from "react";
import Todoitem from "../components/Todoitem";
import API from "../utils/API";

class List extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        // load all tasks
        API.getTodos()
            .then(res => this.setState({ todos: res.data}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Add a Todo" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Add</button>
                        </div>
                    </div>
                    {console.log(this.state.todos)}
                    {this.state.todos.map(item => (
                        <Todoitem 
                            key = {item._id}
                            id = {item._id}
                            todo = {item.todo}
                            deadline = {item.deadline}
                            category = {item.category}
                            completed = {item.completed}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default List;
