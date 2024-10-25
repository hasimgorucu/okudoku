import { Link } from "react-router-dom"
import ari from "../assets/ari.png"
import "./WantClass.css"
import Header from '../components/Header/Header';
import {  Row, Col } from 'reactstrap';

function WantClass() {


    return (
        <main className="wantClass">
            <Header buttons={false} />
            <div className="wantClassContainer">
                <Row className="g-3">
                    <Col xs="12" md="6" >
                        <Link to={"/classList"}>
                            <div className="whatWantContainer">
                                <img src={ari} className="createList" />
                                <h4 className="createListText">SINIFA ÖZEL ROZETLER İÇİN SINIF LİSTESİ OLUŞTURMAK İSTİYORUM</h4>
                            </div>
                        </Link>
                    </Col>

                    <Col xs="12" md="6">
                        <Link to={"/grades"}>
                            <div className="whatWantContainer">
                                <img src={ari} className="createList" />
                                <h4 className="createListText">SINIF LİSTESİ OLUŞTURMAK İSTEMİYORUM</h4>
                            </div>
                        </Link>
                    </Col>

                </Row>
            </div>
        </main>
    )
}

export default WantClass
