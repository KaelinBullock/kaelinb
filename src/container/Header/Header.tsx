import React, { FC } from 'react';
import Images from '../../constants/Images';
import './Header.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <nav>
    <div className="app__header">
      <div className='app__header-logo'>
        <img src={Images.whitelogocircle} alt="images" />
      </div>
      <ul className='app__header-links'>
        <li className='p__notosans'>About</li>
        <li className='p__notosans'>Projects</li>
        <li className='p__notosans'>Contact</li>
      </ul>
    </div>

    {/* <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
      
      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
          <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
      )}

    </div> */}
  </nav>
);

export default Header;
