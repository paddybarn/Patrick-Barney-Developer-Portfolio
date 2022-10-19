import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import Resume from "./components/Pages/Resume";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import './css/navbar.css';
import './css/header.css'
import './css/resume.css'
import './css/contact.css'

const myStyle = {
  backgroundcolor: '#6A7672'
}

const App = () => {
  return (
    // <Router>
      <div style={myStyle} className="flex-column justify-flex-start min-100-vh">
      <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <Header />
          <Routes>
            <Route
            path='/'
            element={<About />}
            />
            <Route
            path='/Projects'
            element={<Projects />}
            />
            <Route
            path='/Contact'
            element={<Contact />}
            />
            <Route
            path='/Resume'
            element={<Resume />}
            />
          </Routes>
        <Footer />
      </div>
      // </Router>
);
}
export default App