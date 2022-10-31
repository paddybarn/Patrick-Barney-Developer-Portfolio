import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function Navbar() {
  return (
      <Menu>
        <a className="menu-item" href="#/About">
          About
        </a>
        <a className="menu-item" href="#/Projects">
          Projects 
        </a>
        <a className="menu-item" href="#/Contact">
          Contact
        </a>
        <a className="menu-item" href="#/Resume">
          Resume
        </a>
      </Menu>
  )
  }