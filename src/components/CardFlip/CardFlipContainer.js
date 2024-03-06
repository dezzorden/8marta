import React from 'react';
import './CardFlip.css';
import {Col, Container, Row} from "react-bootstrap";
import girls from "../../data";
import FlipCard from "./CardFlip";
import FireworksDisplay from "../FireworksDisplay/FireworksDisplay";
import {useCardFlipContext} from "./CardFlipContext";

const FlipCardContainer = () => {

    const {fireWork} = useCardFlipContext();

    return (
        <>
            <FireworksDisplay toggle={fireWork}/>
            <Container style={{position: 'relative', zIndex: 10000}}>
                <Row>
                    {girls.map((girl) => {
                        return (<Col className='wrap-card' key={girl.id} sm={12} md={6} lg={4}>
                            <FlipCard backImage={girl.backImage} frontImage={girl.frontImage} musicFile={girl.audio}
                                      name={girl.name}
                                      id={girl.id}/>
                        </Col>)
                    })}
                </Row>
            </Container>
        </>
    );
};

export default FlipCardContainer;
