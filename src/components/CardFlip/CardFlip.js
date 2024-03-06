import React, {useEffect, useRef} from 'react';
import './CardFlip.css';

const FlipCard =  ({ frontImage, backImage, musicFile,name, isFlipped, onFlip }) => {
    const audioRef = useRef(null);


    useEffect(() => {
        if(musicFile){
            if (isFlipped) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, [isFlipped, musicFile]);


    return (
        <>
            <p className='text-center'>{name}</p>
            <div className={` flip-card ${isFlipped ? 'flipped' : ''}`}  >
                <div className="flip-card-inner">

                    <div className="flip-card-front">
                        <img className="img"   onClick={onFlip} src={frontImage} alt="Front" />
                    </div>
                    <div className="flip-card-back">
                        <img className="img"    onClick={onFlip} src={backImage} alt="Back" />
                    </div>
                </div>
                {musicFile?<audio ref={audioRef} src={musicFile}></audio>:<></>}
            </div>
        </>
    );
};

export default FlipCard;
