import {Dropdown} from "react-bootstrap";
import './Header.scss';
import {NavLink} from "react-router-dom";
import LogoBlack from "../../assets/img/svg/logo-black.svg";
import Phone from "../../assets/img/svg/phone.svg";
import Message from "../../assets/img/svg/message.svg";

const firstName = 'Paulina';
const lastName = 'Chmielewska';
const mobileNumber = '+48 531 441 810';
const email = 'paulina.toda.com'

function reverseString(str) {
  return str.split("").reverse().join("");
}

const firstNameReverse = reverseString(firstName)
const lastNameReverse = reverseString(lastName)
const mobileNumberReverse = reverseString(mobileNumber)
const emailReverse = reverseString(email)

function DropdownNav() {
  return (
    <>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink exact='true' to="/"  activeClassName="active">
                Home
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/aboutMe" activeClassName="active">
                O mnie
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/first-visit" activeClassName="active">
                Pierwsza wizyta
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/price-list" activeClassName="active">
                Cennik
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/contact" activeClassName="active">
                Kontakt
              </NavLink>
            </Dropdown.Item>
            <div className={"dropdown-footer"}>
              <a href="/" className={"link-footer"}>
                <img src={LogoBlack} className={"ic-logo-black"}
                     width={24} height={15} alt="Logo"/>
                <p>{lastNameReverse} {firstNameReverse}</p></a>
              <a href="tel:+48{Phone}" className={"link-footer"}> <img src={Phone} className={"ic-phone"}
                                                                        width={24} height={24}
                                                                        alt="Phone"/>
                <p>{mobileNumberReverse}</p></a>
              <a href="mailto:{email}" className="link-footer">
                <img src={Message} className={"ic-message"} width={24} height={24} alt="Message"/>
                <p>{emailReverse}</p></a>
            </div>
          </Dropdown.Menu>
        </Dropdown>
    </>
  )
}

export default DropdownNav
