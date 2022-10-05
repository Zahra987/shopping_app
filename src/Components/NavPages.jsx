import React from 'react';
import {MdOutlineConnectWithoutContact,MdSmsFailed} from 'react-icons/md';
import {FaHome,FaStoreAlt,FaSave,FaShoppingCart} from 'react-icons/fa'
import {IoLogIn,IoReorderThreeSharp} from 'react-icons/io5';
import { Link } from 'react-router-dom';
export default function NavPages() {
  return (
    <div className='navbar_right' >
          <div className='navbar_right_link'>
            <Link to='/'  > 
              <div className='navbar_icons'>
              <FaHome/>
              <div>Home</div>
              </div>
            </Link>
          </div>
          <div className='navbar_right_link'>
              <Link to='/store' >
              <div className='navbar_icons'>
                <FaStoreAlt/>
                <div>Store</div>
                </div>
              </Link>
          </div>
          <div className='navbar_right_link'>
              <Link to='/cart' >
              <div className='navbar_icons'>
                <FaShoppingCart/>
                <div>Cart</div>
                </div>
              </Link>
          </div>
          <div className='navbar_right_link display'>
              <Link to='/orders' >
                <div className='navbar_icons'>
                <IoReorderThreeSharp/>
                <div>Orders</div>
                </div></Link>
          </div>
          <div className='navbar_right_link display'>
              <Link to='/saved' >
                <div className='navbar_icons'>
                <FaSave/>
                <div>Saved</div>
                </div></Link>
          </div>
          <div className='navbar_right_link display'>
              <Link to='/aboutus' >
              <div className='navbar_icons'>
                <MdSmsFailed/>
                <div>AboutUs</div>
                </div>
              </Link>
          </div>
          <div className='navbar_right_link display'>
              <Link to='/contactus' >
              <div className='navbar_icons'>
                <MdOutlineConnectWithoutContact/>
                <div>ContactUs</div>
                </div>
              </Link>
          </div>
          <div className='navbar_right_link display'>
              <Link to='/login' >
              <div className='navbar_icons'>
                <IoLogIn/>
                <div>Login</div>
                </div>
              </Link>
          </div>
         </div>
  )
}
