import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMenu() {

  return (
    <div className='nav_container'>
      <Link to='/' >home</Link>
      <Link to='/store' >store</Link>
      <Link to='/cart' >cart</Link>
      <Link to='/orders' >orders</Link>
      <Link to='/saved' >saved</Link>
      <Link to='/aboutus' >aboutus</Link>
      <Link to='/contactus' >contactus</Link>
      <Link to='/login' >login</Link>
    </div>
  )
}
