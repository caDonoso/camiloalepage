import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#top">ICONO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#block-1"
                activeClass="active"
                to="block-1"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>bloque 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#block-2"
                className="nav-link" 
                activeClass="active"
                to="block-2"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>bloque 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#block-1"
                className="nav-link" 
                activeClass="active"
                to="block-3"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>bloque 3
              </Link>
            </li>
          </ul>
        </div>
      </nav>);
  }
}

export default Navbar;