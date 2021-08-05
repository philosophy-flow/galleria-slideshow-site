import './Header.css';
import logo from '../../assets/shared/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo}  alt="logo"/>
      <a href="/" className="header-link">start slideshow</a>
    </header>
  );
}

export default Header;