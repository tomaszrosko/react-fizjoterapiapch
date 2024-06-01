import './firstVisit.scss'

import FooterTop from "../Footer/FooterTop";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Photo from "../../assets/img/first-visit.jpg";
import React from "react";

function FirstVisit() {
    return (
        <>
            <section className={'c-section-first-visit'}>
                <Container>
                    <Row className={'justify-content-center'}>
                        <Col sm={10}>
                            <Row>
                                <Col sm={12}>
                                    <h1 className={'text-center'}>Pierwsza wizyta u fizjoterapeuty – Co się
                                        spodziewać</h1>
                                    <p>
                                        Witaj na naszej stronie! Jeśli przygotowujesz się do pierwszej wizyty u
                                        fizjoterapeuty, możesz czuć się trochę zdezorientowany. Ale nie martw się,
                                        jesteśmy
                                        tutaj, aby Ci pomóc zrozumieć, czego możesz się spodziewać i jak przygotować
                                        się na
                                        spotkanie.
                                    </p>
                                </Col>
                                <Col md={4}>
                                    <img src={Photo} className={"img-fluid c-section-first-visit__photo"} width={5000} height={3001} alt="Portrait"
                                         title={"Portrait"}/>
                                </Col>
                                <Col md={8} className={'c-text'}>
                                    <div className={"c-text__content"}>
                                        <p>Witaj na naszej stronie! Jeśli przygotowujesz się do pierwszej wizyty u
                                            fizjoterapeuty, możesz czuć się trochę zdezorientowany. Ale nie martw się,
                                            jesteśmy tutaj, aby Ci pomóc zrozumieć, czego możesz się spodziewać i jak
                                            przygotować się na spotkanie.</p>
                                        <ol>
                                            <li><strong>Historia medyczna:</strong> Podczas pierwszej wizyty
                                                fizjoterapeuta przeprowadzi wywiad medyczny, aby lepiej zrozumieć Twoje
                                                dolegliwości, historię urazów i wszelkie inne problemy zdrowotne, które
                                                mogą mieć wpływ na Twoje leczenie. Pamiętaj więc o dokładnym opisaniu
                                                swoich dolegliwości oraz przeszłych i obecnych problemów zdrowotnych.
                                            </li>
                                            <li><strong>Badanie fizykalne:</strong> Po wywiadzie fizjoterapeuta
                                                przeprowadzi badanie fizyczne, obejmujące ocenę zakresu ruchu, siły
                                                mięśniowej, stabilności stawów i innych czynników związanych z Twoimi
                                                objawami. Jest to kluczowy krok w określeniu Twojego stanu zdrowia i
                                                planu leczenia.
                                            </li>
                                            <li><strong>Twój plan leczenia:</strong> Na podstawie zebranych informacji
                                                fizjoterapeuta opracuje spersonalizowany plan leczenia, który będzie
                                                odpowiadał Twoim potrzebom i celom. Może to obejmować różne techniki
                                                terapeutyczne, ćwiczenia, masaż, manipulacje stawów i wiele innych.
                                            </li>
                                            <li><strong>Edukacja i porady:</strong> Podczas wizyty fizjoterapeuta
                                                udzieli Ci również edukacji na temat Twojej dolegliwości i sposobów
                                                radzenia sobie z nią w codziennym życiu. Może również zalecić ćwiczenia
                                                lub modyfikacje stylu życia, które pomogą Ci w zdrowiu i
                                                rekonwalescencji.
                                            </li>
                                            <li><strong>Kontynuacja opieki:</strong> Pierwsza wizyta to tylko początek
                                                Twojej drogi do zdrowia. Fizjoterapeuta będzie monitorować Twoje postępy
                                                i dostosowywać plan leczenia w miarę potrzeb, aby zapewnić Ci jak
                                                najlepsze wyniki.
                                            </li>
                                        </ol>
                                        <p><strong>Podsumowanie:</strong> Pierwsza wizyta u fizjoterapeuty może być
                                            trochę stresująca, ale pamiętaj, że jesteśmy tutaj, aby Ci pomóc. Będziemy
                                            pracować razem, aby zapewnić Ci najlepszą opiekę i wsparcie w powrocie do
                                            zdrowia i aktywnego życia.</p>
                                        <p>Jeśli masz jakiekolwiek pytania przed wizytą, nie wahaj się skontaktować z
                                            nami. Jesteśmy tu dla Ciebie!</p>
                                    </div>
                                    <div className="buttons d-flex justify-content-between">
                                        <button onClick={() => window.open('link_do_pdf_rodo', '_blank')} className={'btn btn-dark'}>PDF RODO
                                        </button>
                                        <button onClick={() => window.open('link_do_pdf_regulamin', '_blank')} className={'btn btn-dark'}>PDF
                                            Regulamin
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterTop/>
        </>

    );
}

export default FirstVisit