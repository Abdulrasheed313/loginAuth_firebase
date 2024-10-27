import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    margin: '10px'
}}>
     <p><Link to={'/'}>Home</Link></p>
     <p><Link to={'login'}>Login</Link></p>
     <p><Link to={'resgistration'}>Rcesgistration</Link></p>

  </div>
  )
}

export default Navbar