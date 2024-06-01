import './FooterTop.scss'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import LogoBlack from "../../assets/img/svg/house.svg";
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

function SectionDate() {
    return (
        <section className={"section-footer-top"}>
            <Container fluid>
                <Container>
                    <Row>
                        <Col md={8} className={'d-flex align-items-center justify-content-around'}>
                            <p>Tutaj możesz znaleźć dogodny termin i umówić wizytę.</p>
                            <a href={"https://zarejestrowani.pl/w/ivB6FgSCdY0hZSf_s0c4wA/"} target="_blank" rel="noopener noreferrer" title={"Przycisk do umówienia się"} className={'btn btn-dark'}>Umów się</a>
                        </Col>
                        <Col md={4} className={"box-contact"}>
                            <div className="title" id={"contact"}>Kontakt</div>
                            <a href="/public" className={"link-footer"}>
                                <img src={LogoBlack} className={"ic-logo-black"}
                                     width={24} height={24} alt="Logo"/>
                                <p>{lastNameReverse} {firstNameReverse}</p></a>
                            <a href="tel:+48668479065" className={"link-footer"}>
                                <img src={Phone} className={"ic-phone"}
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
