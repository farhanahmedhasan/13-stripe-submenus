import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import logo from './images/logo.svg';
import sublinks from './data';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const pageName = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(pageName, { center, bottom });
  };

  const closeSubmenuBar = (e) => {
    if (e.target.classList.contains('link-btn')) return;
    closeSubmenu();
  };

  return (
    <nav className='nav' onMouseOver={closeSubmenuBar}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className='nav-links'>
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>

        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
