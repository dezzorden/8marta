
import React from "react";
import "./App.css";
import head from './img/head.png'
import flowers1 from './img/flowers1.png'
import flowers2 from './img/flowers2.png'
import FlipCard from "./components/CardFlip/CardFlip";
import girls from "./data";
import {Col, Container, Row} from "react-bootstrap";
const App = () => {


    return (
        <>
            <div className="d-flex align-items-center justify-content-center"><img src={head} style={{maxWidth:'100%'}}  alt="цфт"/></div>
            <div className="flowersLeft"><img src={flowers1} alt="цфт"/></div>
            <div className="flowersRight"><img src={flowers2}   alt="цфт"/></div>
            <h1 className="text-center text-8-marta mb-2 position-relative">С  <span className="text8">8</span> <span style={{color:'#fda201'}}>Марта</span>!
            </h1>
            <Container fluid>
                <Container style={{position:'relative'}}>
                    <Row>
                        {girls.map((girl)=>{
                            return (<Col className='wrap-card' key={girl.id} sm={12} md={6} lg={4}>
                                <FlipCard   backImage={girl.backImage} frontImage={girl.frontImage} musicFile={girl.audio} name={girl.name}/>
                            </Col>)
                        })}
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default App;
