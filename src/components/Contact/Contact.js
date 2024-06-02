import "./Contact.scss";
import React from 'react';
import Email from "./Email";
import FooterTop from "../Footer/FooterTop";
import Map from "./Map"
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";

function Contact() {
    return (
        <>
            <section className={"c-contact"}>
                <Container fluid>
                    <Container>
                        <Row>
                            <Email/>
                            {/*<Map/>*/}
                            <FooterTop/>
                        </Row>
                    </Container>
                </Container>
            </section>
        </>
    )
}

export default Contact;
