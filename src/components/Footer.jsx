import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socials'>
        <h1>Socials</h1>
       <a className='social' href="">LinkedIn</a> <br></br> <br></br>
       <a className='social' href="">Github</a> <br></br> <br></br>
       {/* <a className='social' href="">Instagram</a> */}

      </div>
        
      <div>
      <h1>Emily Segundo</h1>
        <p className='info'>Chicago, IL</p>
        <p className='info'>emily.segundo.n@gmial.com</p>
        <p className='info'>(630)640-1286</p>
      </div>
    </div>
  )
}

export default Footer
