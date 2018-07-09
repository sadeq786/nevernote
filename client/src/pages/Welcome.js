import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (

    <div className="container">
        <div className="col-12">
            <div className="jumbotron">
                <h1 className="display-4">Greetings!</h1>
                <p className="lead">Welcome to Nevernote</p>
                <hr className="my-4" />
                <p className="lead">
                    <Link to="/list" className="btn btn-primary btn-lg">Go to my To Do List</Link>
                    
                </p>
            </div>
        </div>
    </div>
)

export default Welcome;