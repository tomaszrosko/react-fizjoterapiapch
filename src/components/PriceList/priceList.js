import './priceList.scss'
import Accordion from 'react-bootstrap/Accordion';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import FooterTop from "../Footer/FooterTop";

function PriceList() {
    return (
        <>
            <section className={'section-price-list'}>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h2>Konsultacje i Diagnostyka</h2>
                            <ul>
                                <li>Pierwsza konsultacja z diagnozą: 150-200 PLN</li>
                                <li>Konsultacja kontrolna: 100-150 PLN</li>
                            </ul>
                            <h2>Terapie i Zabiegi</h2>
                            <ul>
                                <li>Indywidualna sesja fizjoterapii (30 min): 80-120 PLN</li>
                                <li>Indywidualna sesja fizjoterapii (60 min): 140-200 PLN</li>
                                <li>Terapia NDT-Bobath (30 min): 100-150 PLN</li>
                                <li>Terapia NDT-Bobath (60 min): 180-250 PLN</li>
                                <li>Terapia metodą Vojty (30 min): 100-150 PLN</li>
                                <li>Terapia metodą Vojty (60 min): 180-250 PLN</li>
                                <li>Hydroterapia (30 min): 80-130 PLN</li>
                                <li>Masaż dziecięcy (30 min): 70-110 PLN</li>
                            </ul>
                            <h2>Dodatkowe Usługi</h2>
                            <ul>
                                <li>Kinesiotaping: 40-80 PLN (w zależności od obszaru aplikacji)</li>
                                <li>Konsultacja dietetyczna: 100-150 PLN</li>
                                <li>Zajęcia grupowe (np. gimnastyka korekcyjna): 30-60 PLN za sesję</li>
                            </ul>
                            <h2>Pakiety i Abonamenty</h2>
                            <ul>
                                <li>Pakiet 5 sesji indywidualnych (30 min): 350-500 PLN</li>
                                <li>Pakiet 10 sesji indywidualnych (30 min): 650-950 PLN</li>
                                <li>Abonament miesięczny (4 sesje po 60 min): 500-700 PLN</li>
                            </ul>
                            <h3>Uwagi</h3>
                            <p>
                                Ceny mogą się różnić w zależności od doświadczenia fizjoterapeuty oraz specyfiki
                                terapii.
                                W niektórych placówkach mogą być oferowane zniżki dla rodzeństwa lub pakiety promocyjne.
                                Warto zasięgnąć informacji o możliwości refundacji kosztów z ubezpieczenia zdrowotnego.
                            </p>
                            <p>
                                Pamiętaj, aby przed umówieniem wizyty zapytać o szczegóły oferty i dostępne opcje w
                                danej
                                placówce.
                            </p>
                        </Col>
                        <Col xs={12} md={6}>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><h2>Konsultacje i Diagnostyka</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Pierwsza konsultacja z diagnozą: 150-200 PLN</li>
                                            <li>Konsultacja kontrolna: 100-150 PLN</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><h2>Terapie i Zabiegi</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Indywidualna sesja fizjoterapii (30 min): 80-120 PLN</li>
                                            <li>Indywidualna sesja fizjoterapii (60 min): 140-200 PLN</li>
                                            <li>Terapia NDT-Bobath (30 min): 100-150 PLN</li>
                                            <li>Terapia NDT-Bobath (60 min): 180-250 PLN</li>
                                            <li>Terapia metodą Vojty (30 min): 100-150 PLN</li>
                                            <li>Terapia metodą Vojty (60 min): 180-250 PLN</li>
                                            <li>Hydroterapia (30 min): 80-130 PLN</li>
                                            <li>Masaż dziecięcy (30 min): 70-110 PLN</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><h2>Dodatkowe Usługi</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <h2>Dodatkowe Usługi</h2>
                                        <ul>
                                            <li>Kinesiotaping: 40-80 PLN (w zależności od obszaru aplikacji)</li>
                                            <li>Konsultacja dietetyczna: 100-150 PLN</li>
                                            <li>Zajęcia grupowe (np. gimnastyka korekcyjna): 30-60 PLN za sesję</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><h2>Pakiety i Abonamenty</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Pakiet 5 sesji indywidualnych (30 min): 350-500 PLN</li>
                                            <li>Pakiet 10 sesji indywidualnych (30 min): 650-950 PLN</li>
                                            <li>Abonament miesięczny (4 sesje po 60 min): 500-700 PLN</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <h3>Uwagi</h3>
                            <p>
                                Ceny mogą się różnić w zależności od doświadczenia fizjoterapeuty oraz specyfiki
                                terapii.
                                W niektórych placówkach mogą być oferowane zniżki dla rodzeństwa lub pakiety promocyjne.
                                Warto zasięgnąć informacji o możliwości refundacji kosztów z ubezpieczenia zdrowotnego.
                            </p>
                            <p>
                                Pamiętaj, aby przed umówieniem wizyty zapytać o szczegóły oferty i dostępne opcje w
                                danej
                                placówce.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterTop/>
        </>

    )
        ;
}

export default PriceList;