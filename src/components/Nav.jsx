import React from 'react';
// import { NavLink } from 'react-router-dom';
import { HashLink as NavLink} from 'react-router-hash-link';

const Nav = () => {
  return (
    <div>
        <NavLink to="#home" className='link'>HOME</NavLink>
        <NavLink to="#about" className='link'>ABOUT</NavLink>
        <NavLink to="#projects" className='link'>PROJECTS</NavLink>
     
    </div>
  );
}

export default Nav;