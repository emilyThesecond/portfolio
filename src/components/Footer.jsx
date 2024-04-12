import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socials'>
        <h2>Socials</h2>
       <a className='social' href="https://www.linkedin.com/in/emily-segundo/" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br></br> <br></br>
       <a className='social' href="https://github.com/emilyThesecond" target="_blank" rel="noopener noreferrer">Github</a> <br></br> <br></br>
       {/* <a className='social' href="">Instagram</a> */}

      </div>
        
      <div>
      <h2>Emily Segundo</h2>
        <p className='info'>Chicago, IL</p>
        <p className='info'>emily.segundo.n@gmial.com</p>
        <p className='info'>(630)640-1286</p>
      </div>
    </div>
  )
}

export default Footer
