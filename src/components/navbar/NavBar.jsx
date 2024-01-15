import React, { useState } from 'react';
import './navbar.css';

import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const NavBar = () => {
  const [active, setActive] = useState('navBar');

  const showNavbar = () => {
    setActive('navBar activeNavbar');
  };

  const closeNav = () => {
    setActive('navBar');
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1>
              <MdOutlineTravelExplore className='icon' /> Travel
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='NavLink'>
                Home
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='NavLink'>
                Packages
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='NavLink'>
                Shop
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='NavLink'>
                About
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='NavLink'>
                Pages
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='NavLink'>
                News
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='NavLink'>
                Contact
              </a>
            </li>
            <button className='btn'>
              <a href='#' className='btnLink'>
                Book Now
              </a>
            </button>
          </ul>
          <div onClick={closeNav} className='closeNavbar'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNavbar} className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  );
};

export default NavBar;
