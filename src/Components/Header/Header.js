import './Header.css';
import logo from '../../assets/shared/logo.svg';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">  
        <img src={logo}  alt="logo"/>
      </Link>
      <Link to="/" className="header-link">start slideshow</Link>
    </header>
  );
}

export default Header;