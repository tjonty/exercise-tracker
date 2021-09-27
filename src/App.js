import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <br/>
        <Route path="/exercise-tracker/" exact component={ExercisesList} />
        <Route path="/exercise-tracker/edit/:id" component={EditExercise} />
        <Route path="/exercise-tracker/create" component={CreateExercise} />
        <Route path="/exercise-tracker/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
