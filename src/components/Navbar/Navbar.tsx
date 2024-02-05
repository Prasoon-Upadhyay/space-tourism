import './navbar.css'
import Logo from '../../assets/shared/logo.svg'
import CloseBtn from '../../assets/shared/icon-close.svg'

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const path = window.location.pathname

  return (
    <nav className='nav'>
        <div className="img">
          <img src = {Logo} />
        </div>

        {/*--------------------- Default NavBar---------------- */}

        <ul className="nav--links" >
            <Link to={'/'} className={`nav--link ${path === '/' ? 'nav--active'  : ''} `} >00 &nbsp; HOME</Link>
            <Link to={'/destinations'} className= {`nav--link ${path === '/destinations' ? 'nav--active'  : ''} `} >01 &nbsp; DESTINATIONS</Link>
            <Link to={'/crew'} className= {`nav--link ${path === '/crew' ? 'nav--active'  : ''} `} >02 &nbsp; CREW</Link>
            <Link to={'/tech'} className= {`nav--link ${path === '/tech' ? 'nav--active'  : ''} `} >03 &nbsp; TECHONOLOGY</Link>
        </ul>

        <div onClick = {() => setIsOpen(true)} className='hamburger'>
          <RxHamburgerMenu />
        </div>

        {/*--------------------- Hamburger NavBar---------------- */}

        <div  className={`hamburger--links ${isOpen ? 'hamburger-opened' : 'hamburger-closed'}`}>
          <div className=' close-btn--div'>
              <img className='close--btn' onClick = {() => setIsOpen(false)} src = {CloseBtn} />
          </div>
          <ul className='ham--list' >
            <Link to={'/'} className={`ham--link ${path === '/' ? 'ham--link--active'  : ''} `}>00 &nbsp; HOME</Link>
            <Link to={'/destinations'} className={`ham--link ${path === '/destinations' ? 'ham--link--active'  : ''} `}>01 &nbsp; DESTINATIONS</Link>
            <Link to={'/crew'} className={`ham--link ${path === '/crew' ? 'ham--link--active'  : ''} `}>02 &nbsp; CREW</Link>
            <Link to={'/tech'} className={`ham--link ${path === '/tech' ? 'ham--link--active'  : ''} `}>03 &nbsp; TECHONOLOGY</Link>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar