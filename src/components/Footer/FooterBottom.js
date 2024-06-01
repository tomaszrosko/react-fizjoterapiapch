import './FooterBottom.scss'

import Container from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const link = 'https://www.tomaszrosko.pl';
const linkTitle = 'Portfolio Tomasz Rośko';

function FooterBottom() {
    return (
        <footer>
            <Container fluid>
                <Row className={"copyright text-center"}>
                    <Col className={"col-12"}>
                        <a href={link} title={linkTitle} target="_blank" rel="noopener noreferrer">Copyright © 2024 Tomasz Rośko</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterBottom;
