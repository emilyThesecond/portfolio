import React from 'react';
import { HashLink as NavLink} from 'react-router-hash-link';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        };

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className={`nav ${isSticky ? 'sticky' : ''}`} id='navbar'>
            <NavLink to="#home" className='link'>HOME</NavLink>
            {/* <NavLink to="#home" className='link'id='name'>EMILY SEGUNDO<br/>Software Engineer</NavLink> */}
            <NavLink to="#about" className='link'>ABOUT</NavLink>
            <NavLink to="#projects" className='link'>PROJECTS</NavLink>
            <NavLink to="#contact" className='link'>CONTACT</NavLink>
        </div>
    );
}

export default Nav;
