import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (

    <div className="container">
        <div className="col-12">
            <div class="jumbotron">
                <h1 class="display-4">Greetings!</h1>
                <p class="lead">Welcome to Nevernote</p>
                <hr class="my-4" />
                <p class="lead">
                    <Link to="/list" className="btn btn-primary btn-lg">Go to my To Do List</Link>
                    
                </p>
            </div>
        </div>
    </div>
)

export default Welcome;