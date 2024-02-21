import { NavLink } from "react-router-dom"
import React from 'react'

const Nav = () => {
  return (
    <div>
        <div>
            <NavLink>HOME</NavLink>
            <NavLink>PROJECTS</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>CONTACT</NavLink>
        </div>
    </div>
  )
}

export default Nav
