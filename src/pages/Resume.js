import React from 'react';
// import { Link } from 'react-router-dom';
import resume from "../images/react-resume.png";

function Resume() {
  return (<> 
  <div>
    <img src={resume} alt="Caroline's resume"></img><br/>
    <img src={require("../images/react-resume.png")} alt="require function failure"></img><br/>
  </div>
  </>);
}

export default Resume;