import React from 'react'
import { BrowserRouter, Routes , Route ,Navigate } from 'react-router-dom'
import NavBar from './NavBar'
import About from './About'
import Home from './Home'
import User from './User'
export default function SimpleRouter() {
  return (
    <div>
        <BrowserRouter>
        <NavBar />
            <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/about' element={<About />}/>
               <Route path='/*' element={<Navigate to="/" />} /> 
               <Route path='/user/:name' element={<User />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
