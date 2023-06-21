import React, { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './Navbar.css'


const Menu = () => (
  <>
    <p><a className='gpt3__navbar-link' href="#Home">Home</a></p>
    <p><a className='gpt3__navbar-link' href="#whatgtp3">What is GPT3?</a></p>
    <p><a className='gpt3__navbar-link' href="#possibility">Open AI</a></p>
    <p><a className='gpt3__navbar-link' href="#features">Case Studies</a></p>
    <p><a className='gpt3__navbar-link' href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;