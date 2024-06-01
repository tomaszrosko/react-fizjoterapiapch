import './AboutMe.scss'

import FooterTop from "../Footer/FooterTop";
import React from "react";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Portrait from "../../assets/img/portrait.jpg";

function AboutMe() {
    return (
        <section className={"section-aboutMe"}>
            <Container>
                <Row className={'c-row-content'}>
                    <Col sm={5} className={'c-row-content__photo'}>
                        <img src={Portrait} className={"img-fluid c-row-content__photo-img"} width={640} height={959} alt="Portrait" title={"Portrait"}/>
                    </Col>
                    <Col sm={7} className={'c-row-content__text'}>
                        <div className={"c-row-content__text-box"}>
                            <h3>About Me</h3>
                            <p>
                                Cześć! Nazywam się Paulina Chmielewska, jestem dyplomowanym fizjoterapeutą dziecięcym z
                                [liczba] lat doświadczenia w pracy z dziećmi i młodzieżą. Specjalizuję się w diagnostyce
                                i
                                terapii schorzeń neurologicznych, ortopedycznych oraz rozwojowych u dzieci. Moja pasja
                                do
                                pracy z najmłodszymi pacjentami zrodziła się już na studiach i od tamtej pory
                                nieustannie
                                się rozwijam, aby móc jak najlepiej wspierać ich zdrowie i rozwój.
                            </p>
                            <p>
                                Ukończyłam Śląski Uniwersytet Medyczny z tytułem magistra fizjoterapii, a także liczne
                                kursy
                                specjalistyczne, takie jak [przykładowe kursy/certyfikaty]. Moja praca opiera się na
                                indywidualnym podejściu do każdego dziecka, łącząc najnowsze metody terapeutyczne z
                                ciepłą i
                                przyjazną atmosferą, co pozwala na osiąganie najlepszych rezultatów.

                            </p>
                            <p> W swojej pracy stosuję różnorodne techniki, w tym terapię manualną, ćwiczenia
                                korekcyjne,
                                terapię zajęciową oraz metody wspomagające rozwój sensoryczny. Wierzę, że kluczowym
                                elementem skutecznej terapii jest bliska współpraca z rodzicami i opiekunami, dlatego
                                zawsze
                                staram się angażować ich w proces terapeutyczny, dostarczając odpowiednich narzędzi i
                                wiedzy
                                do kontynuowania ćwiczeń w domu.
                            </p>
                            <p>
                                Prywatnie jestem miłośnikiem sportu i aktywnego trybu życia, co pomaga mi zrozumieć, jak
                                ważna jest ruchliwość i sprawność fizyczna na każdym etapie życia. W wolnym czasie
                                angażuję
                                się w projekty edukacyjne dla dzieci, prowadzę warsztaty oraz szkolenia dla rodziców i
                                opiekunów, promując zdrowy rozwój i profilaktykę wad postawy.

                            </p>
                            <p> Serdecznie zapraszam do kontaktu i współpracy. Razem zadbamy o zdrowie i prawidłowy
                                rozwój
                                Twojego dziecka!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterTop/>
        </section>
    )
}

export default AboutMe;
