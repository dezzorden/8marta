
import React from "react";
import "./App.css";
import head from './img/head.png'
import flowers1 from './img/flowers1.png'
import flowers2 from './img/flowers2.png'
import { Container} from "react-bootstrap";
import CardFlipContainer from "./components/CardFlip/CardFlipContainer";
import {CardFlipProvider} from "./components/CardFlip/CardFlipContext";
const App = () => {


    return (
        <>
            <div className="d-flex align-items-center justify-content-center"><img src={head} style={{maxWidth:'100%'}}  alt="цфт"/></div>
            <div className="flowersLeft"><img src={flowers1} alt="цфт"/></div>
            <div className="flowersRight"><img src={flowers2}   alt="цфт"/></div>
            <h1 className="text-center text-8-marta  position-relative mb-4">С  <span className="text8">8</span> <span style={{color:'#fda201'}}>Марта</span>!
            </h1>
            <Container fluid>
                <CardFlipProvider>
                    <CardFlipContainer/>
                </CardFlipProvider>
            </Container>
        </>
    );
};

export default App;
