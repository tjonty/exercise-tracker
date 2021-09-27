import { Component } from 'react';
import { Link } from 'react-router-dom';

import './CSS/Navbar.css'

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <Link to="/exercise-tracker" className="nav-brand">ExcerTracker</Link>
                <ul>
                    <li>
                        <Link to="/exercise-tracker" className="nav-link">Exercises</Link>
                    </li>
                    <li>
                        <Link to="/exercise-tracker/create" className="nav-link">Create Exercise</Link>
                    </li>
                    <li className="nav-right">
                        <Link to="/exercise-tracker/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        )
    }
}