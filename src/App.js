// Filename - App.js

import React, { useState } from "react";
import "./App.css";

import FlipCard from "./components/CardFlip/CardFlip";
import girls from "./data";
import {Col, Container, Row, ThemeProvider} from "react-bootstrap";
const App = () => {


    return (
        <>
            <h1 className="text-center mb-5">С 8 Марта!</h1>
            <Container fluid>
                <Container>
                <Row>

                    {girls.map((girl)=>{

                        return (<Col className='wrap-card' key={girl.id} xs={4}>
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
