import React from 'react';
import '../../css/projects.css';
import Pawphoto from '../../img/pawFinder.gif';
import GolfFinder from '../../img/golfFinder.gif';


export default function Projects() {
    return(
    <div id="project1">
        <div id="paw">
            <button id="My Work">
                <a href= "https://find-my-pets.herokuapp.com/">
                    <img id="pawphoto" src={Pawphoto} className="project1" alt="pawfinder website gif" />
                </a>
            </button>
        </div>
        <div id="project2">
            <button>
            <a href="https://michaelhill4.github.io/animated-memory/">
                <img id="golfphoto" src={GolfFinder} className="project2" alt="golfcourse finder gif" />
            </a>
            </button> 
        </div>
    </div>
        
    )
}