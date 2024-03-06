import React, {useEffect, useRef} from 'react';
import './CardFlip.css';
import {useCardFlipContext} from "./CardFlipContext";

const FlipCard =  ({ frontImage, backImage, musicFile, id }) => {
    const audioRef = useRef(null);

    const { openCardId, handleCardFlip } = useCardFlipContext();
    const isFlipped = openCardId === id;

    useEffect(() => {
        if (musicFile) {
            if (isFlipped) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, [isFlipped, musicFile]);
    console.log('musicFile',musicFile)
    return (
        <>
            <div className={` flip-card ${isFlipped ? 'flipped' : !isFlipped && openCardId !== null? 'blur' :''}`}  >
                <div className="flip-card-inner">
                    <img className="img"  style={{opacity: 0}}  onClick={() => handleCardFlip(id)} src={frontImage} alt="Front" />
                    <div className="flip-card-front">
                        <img className="img"   onClick={() => handleCardFlip(id)} src={frontImage} alt="Front" />
                    </div>
                    <div className="flip-card-back">
                        <img className="img"    onClick={() => handleCardFlip(id)} src={backImage} alt="Back" />
                    </div>
                </div>
                {musicFile?<audio ref={audioRef} src={musicFile}></audio>:<></>}
            </div>
        </>
    );
};

export default FlipCard;
