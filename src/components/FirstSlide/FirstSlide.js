import './FirstSlide.scss'
import Main from '../../assets/img/main.jpg'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function Index() {
    return (
        <section className={"c-first-slide"}>
            <Container fluid>
                <Row>
                    <Col xs={12} className={"px-0 position-relative"}>
                        <div className="c-first-slide__title">
                            <h1>
                                <a href={"https://zarejestrowani.pl/w/ivB6FgSCdY0hZSf_s0c4wA/"} target="_blank" rel="noopener noreferrer" title={"Przycisk do umówienia się"}>Umów się</a>
                            </h1>
                        </div>
                        <div className="c-first-slide__photo">
                            <Card.Img variant="top" src={Main} loading="lazy" alt={"Przygody o których nie marzyliśmy"}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper eget velit at
                            ultricies. Praesent feugiat lobortis massa non faucibus. Aliquam feugiat mi nec libero
                            eleifend tempor. Duis enim ante, scelerisque quis faucibus ut, mollis ac libero. Vivamus
                            pharetra mauris sit amet massa dapibus, id rutrum arcu aliquam. Aenean rhoncus semper
                            tortor, a sodales felis lacinia in. Praesent aliquet felis nec pretium scelerisque. Mauris
                            interdum viverra massa quis iaculis. Phasellus elementum pharetra tellus, eget pellentesque
                            ipsum venenatis vel. Cras rutrum scelerisque egestas.
                        </p>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default Index;
