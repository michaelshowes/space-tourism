import './header.scss';
import logo from '../../assets/images/shared/logo.svg';
import menu from '../../assets/images/shared/icon-hamburger.svg';
import close from '../../assets/images/shared/icon-close.svg';

export default function Header() {
  return (
    <header className='header'>
      <img className="logo" src={ logo } alt="Logo" />
      <img className="menu" id="menu" src={ menu } alt="Menu" />
      <nav className="nav-menu nav-close" id="navMenu">
        <img className="close" id="closeMenu" src={ close } alt="" />
        <ul className="nav-text">
          <li><a href="#"><span className="bold">00</span> Home</a></li>
          <li><a href="#"><span className="bold">01</span> Destination</a></li>
          <li><a href="#"><span className="bold">02</span> Crew</a></li>
          <li><a href="#"><span className="bold">03</span> Technology</a></li>
        </ul>
      </nav>
    </header>
  )
}