import React from 'react';
// import { NavLink } from 'react-router-dom';
import { HashLink as NavLink} from 'react-router-hash-link';

const Nav = () => {
  return (
    <div className='nav'>
        <NavLink to="#home" className='link'>HOME</NavLink>
        <NavLink to="#about" className='link'>ABOUT</NavLink>
        <NavLink to="#projects" className='link'>PROJECTS</NavLink>
        <NavLink to="#contact" className='link'>CONTACT</NavLink>
     
    </div>
  );
}

export default Nav;