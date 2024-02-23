import React from 'react'

const Projects = () => {
  return (
    <div className='page' id='projects'>
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
        {/* <div className="card">
                <img src="path_to_your_image.jpg" alt="Project 3" />
                <div className="card-text">
                <p>Text for Project 3</p>
                </div>
        </div> */}
    </div>
  )
}

export default Projects
