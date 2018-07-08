import React, { Component } from "react";
import Todoitem from "../components/Todoitem"

class List extends Component {
    state = {}

    render() {
        return (
            <div className="container">
                <div className="col-md-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Add a Todo" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Add</button>
                        </div>
                    </div>

                    <Todoitem />
                </div>
            </div>
        )
    }
}

export default List;
