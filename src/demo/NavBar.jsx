import React from 'react'
import { Link} from 'react-router-dom'



export default function NavBar() {
  return (
    <div>
    <ul>
        <li> <Link className='nav-link' to="/">home</Link></li>
        <li><Link className='nav-link' to="/about">about</Link></li>
        <li><Link className='nav-link' to="/user/anil">User</Link></li>
        <li><Link className='nav-link' to="/user/rishav">Rishav</Link></li>
       
    </ul>
    
        
    </div>
  )
}
