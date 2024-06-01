import './Header.scss'
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import DropDownNav from './Dropdown';
import LogoText from "../../assets/img/logo-text-header.jpg";


function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col className={"c-nav"}>
            <div className={"c-nav__box-left"}>
              <Link to="/"><img src={LogoText} className={"ic-logo"} width={170} height={59} alt="Logo"/></Link>
            </div>
            <div className="c-nav__burger d-sm-none">
              <DropDownNav/>
            </div>
            <div className={"c-navbar d-none d-sm-flex"}>
              <div id={"nav-collapse"}>
                <ul className={"c-navbar__nav"}>
                  <li className={"c-navbar__nav-item"}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={"c-navbar__nav-item"}>
                    <Link to="/aboutMe">About Me</Link>
                  </li>
                  <li className={"c-navbar__nav-item c-navbar__nav-contact"}>
                    <Link to="/contact">Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}


export default Header;
