import React from 'react'

const Projects = () => {
  return (
    <div className='page' id='projects'>
        <h1>Projects</h1>
        <div className="card">
                <img src="https://i.imgur.com/aRrgFzu.png" alt="Project 1" />
                <div className="card-text">
                <p>The Strokes Fans</p>
                </div>
        </div>
        <div className="card">
                <img src="https://i.imgur.com/86E64Nb.png" alt="Project 2" />
                <div className="card-text">
                <p>Habitualize</p>
                </div>
        </div>
        <div className="card">
                <img src="https://i.imgur.com/s0NrMV0.png" alt="Project 3" />
                <div className="card-text">
                <p>Glaze Cookbook</p>
                </div>
        </div>
    </div>
  )
}

export default Projects
