import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
    <div className="Introduction">
      <h2>Check it out...</h2>
      <Link to="/ProjectPage" className="link">Some of my projects</Link>
      <Link to="/Resume" className="link">My Resume</Link>
        {/* <ul className="projectList">
          <li><Link to="/ProjectPage" className="linkOnHome">Some of my projects</Link></li>
          <li><Link to="/Resume" className="linkOnHome">My Resume</Link></li>
        </ul>
        <p>Happy exploring!</p> */}
    </div>
    </>
  );
}

export default HomePage;