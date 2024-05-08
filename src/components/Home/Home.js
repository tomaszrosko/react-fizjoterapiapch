import './Home.scss'
import {Button, Card} from "react-bootstrap";
import Avatar from '../../assets/img/min/avatar.jpg';
import Phone from "../../assets/img/svg/phone.svg";
import Tool from "../../assets/img/svg/tool.svg";

function Home() {
    return (
        <>
            <h1>Strona w budowie <img src={Tool} className={"ic-tool"} width={48} height={48} alt="Tool"/></h1>
            <Card className={"c-card"} style={{width: '250px'}}>
                <Card.Img src={Avatar} className="rounded-img"/>
                <Card.Body>
                    <Card.Title><strong>Paulina Chmielewska</strong></Card.Title>
                    <Card.Text>
                        Fizjoterapia i Osteopatia pediatryczna
                    </Card.Text>
                    <a href="tel:+48531441810"><img src={Phone} className={"ic-phone"} width={24} height={24} alt="Phone"/>
                        <span>+48 531 441 810</span></a>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="primary" href="https://zarejestrowani.pl/w/ivB6FgSCdY0hZSf_s0c4wA/"
                            target="_blank">Umów wizytę</Button>
                </Card.Footer>
            </Card>
        </>

    );
}

export default Home;
