import React, { useRef } from 'react';
import {IoReorderThreeSharp} from 'react-icons/io5';
import '../Css/navbar.css';
import NavMenu from './NavMenu';
import NavPages from './NavPages';

export default function Navbar() {
  const helpRef=useRef();
  return (
    <header className='navbar_header' >
      <nav className='navbar_nav' >
         <div className='navbar_left' >
          <span className='hamberger_container'
            onClick={()=>{
              helpRef.current.classList.toggle('menu_help')
            }}
          ><IoReorderThreeSharp className='hamberger' /></span>
          <span>Ramezanpour</span>
         </div>
         <NavPages/>
      </nav>
      <div ref={helpRef} className='menu_help' >
       <NavMenu/>
      </div>
    </header>
  )
}
