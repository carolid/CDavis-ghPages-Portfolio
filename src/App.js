import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Resume from './pages/Resume';

function App() {

  
  return (
    <div className="App">
      <h1 className="app-title">My name is Caroline!</h1>
        <p>This is my Portfolio Page :)</p>
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/ProjectPage">
            <ProjectPage />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
        </div>
      </Router>
    </div>
  );
}  

export default App;
