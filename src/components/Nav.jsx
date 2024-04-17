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
            <div className='logo-header'>

            {/* <img className='logo' src="https://i.imgur.com/pR31zcv.png" alt="Logo with E and S" /> */}
            <img className='logo' src="https://i.imgur.com/zsEEDQp.png" alt="Logo with E and S" />
            <div className='name-navbar'>
            <h1>EMILY SEGUNDO</h1>
            <div className='navbar'>            
            {/* <NavLink to="#home" className='link'>HOME</NavLink> */}
            <NavLink to="#about" className='link'>ABOUT</NavLink>
            <NavLink to="#projects" className='link'>PROJECTS</NavLink>
            <NavLink to="#skills" className='link'>SKILLS</NavLink>
            <NavLink to="https://docs.google.com/document/d/19uHPdQYXastPyo64PPVbi7jxlWMRewXHGSiyI4Gsi7c/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='link'>RESUME</NavLink>
            </div>
            </div>
            <p className='engineer'>SOFTWARE ENGINEER</p>
            </div>
            {/* <NavLink to="#home" className='link'>HOME</NavLink> */}
            {/* <NavLink to="#home" className='link'id='name'>EMILY SEGUNDO<br/>Software Engineer</NavLink> */}
            {/* <NavLink to="#about" className='link'>ABOUT</NavLink>
            <NavLink to="#projects" className='link'>PROJECTS</NavLink>
            <NavLink to="#contact" className='link'>CONTACT</NavLink> */}
        </div>
    );
}

export default Nav;
