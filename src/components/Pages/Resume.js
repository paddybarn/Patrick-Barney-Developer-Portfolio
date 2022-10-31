import React from 'react';
import MyResume1 from '../../img/1resume.jpg'
import MyResume2 from '../../img/Patrick Barney CS Resume1024_2.jpg'

export default function Resume() {
    return(
        <div id="container">
             <button id="My Work">
                <img id="resume" src={MyResume1} alt="Patrick Barney MERN Developer Resume" />
            </button>
             <button id="My Work">
                <img id="resume" src={MyResume2} alt="Patrick Barney MERN Developer Resume" />
            </button>
        </div>
    )
}