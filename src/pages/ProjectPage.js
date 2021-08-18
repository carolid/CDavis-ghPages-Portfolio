import React from 'react';
import { Link } from 'react-router-dom';
// import { ImEye } from 'react-icons/im';

function ProjectPage() {
  return (
    <div>
      <header className="project-grid">
        <Link to="/" className="link">To next</Link>
        <Link to="/" className="link">To home</Link>
      </header>
    </div>
  );
}

export default ProjectPage;