import './AboutMe.scss'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import LogoBlack from "../../assets/img/svg/logo-black.svg";
import Phone from "../../assets/img/svg/phone.svg";
import Message from "../../assets/img/svg/message.svg";

const firstName = 'Tomasz';
const lastName = 'Rośko';
const mobileNumber = '+48 668 479 065';
const email = 'tomasz.rosko@gmail.com'

function reverseString(str) {
    return str.split("").reverse().join("");
}

const firstNameReverse = reverseString(firstName)
const lastNameReverse = reverseString(lastName)
const mobileNumberReverse = reverseString(mobileNumber)
const emailReverse = reverseString(email)

function SectionDate() {
    return (
        <section className={"section-date"}>
            <Container fluid>
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="title" id={"about"}>Lorem Ipsum</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper eget velit at
                                ultricies. Praesent feugiat lobortis massa non faucibus. Aliquam feugiat mi nec libero
                                eleifend tempor. Duis enim ante, scelerisque quis faucibus ut, mollis ac libero. Vivamus
                                pharetra mauris sit amet massa dapibus, id rutrum arcu aliquam. Aenean rhoncus semper
                                tortor, a sodales felis lacinia in. Praesent aliquet felis nec pretium scelerisque.
                                Mauris interdum viverra massa quis iaculis. Phasellus elementum pharetra tellus, eget
                                pellentesque ipsum venenatis vel. Cras rutrum scelerisque egestas.
                            </p>
                            <p>
                                Nullam ut magna cursus, molestie sem cursus, efficitur nisl. Quisque dictum libero
                                pellentesque aliquam blandit. Phasellus vitae facilisis metus. Quisque tristique
                                venenatis nunc in consequat. Nulla facilisi. Nullam quam ante, pellentesque interdum
                                gravida tincidunt, dictum vel mi. Integer vel libero in ante iaculis accumsan. Vivamus
                                porttitor dui eget felis aliquet lacinia. Mauris porttitor sem ac odio convallis,
                                interdum maximus lorem eleifend. Integer interdum tempor metus, non ornare libero mattis
                                vel. Ut sed lectus in arcu bibendum fringilla eget a nisi. Nulla ornare quam lacus, at
                                varius felis pharetra imperdiet. In lacus nisi, ullamcorper non ligula eget,
                                sollicitudin faucibus nisi.
                            </p>
                        </Col>
                        <Col md={4} className={"box-contact"}>
                            <div className="title" id={"contact"}>Kontakt</div>
                            <a href="/" className={"link-footer"}>
                                <img src={LogoBlack} className={"ic-logo-black"}
                                     width={24} height={15} alt="Logo"/>
                                <p>{firstNameReverse} {lastNameReverse}</p></a>
                            <a href="tel:+48668479065" className={"link-footer"}> <img src={Phone} className={"ic-phone"}
                                                                                      width={24} height={24}
                                                                                      alt="Phone"/>
                                <p>{mobileNumberReverse}</p></a>
                            <a href="mailto:{email}" className="link-footer">
                                <img src={Message} className={"ic-message"} width={24} height={24} alt="Message"/>
                                <p>{emailReverse}</p></a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default SectionDate;
