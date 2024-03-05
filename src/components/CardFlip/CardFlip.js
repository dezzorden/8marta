import React, {useRef, useState} from 'react';
import './CardFlip.css'; // Предполагается, что стили анимации и карточки будут определены здесь

const FlipCard =  ({ frontImage, backImage, musicFile,name }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const audioRef = useRef(null);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
        if(musicFile){
            if (!isFlipped) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }

    };


    return (
        <>
            <p className='text-center'>{name}</p>
            <div className={` flip-card ${isFlipped ? 'flipped' : ''}`} >
                <div className="flip-card-inner">

                    <div className="flip-card-front">
                        <img className="img"   onClick={handleClick} src={frontImage} alt="Front" />
                    </div>
                    <div className="flip-card-back">
                        <img className="img"    onClick={handleClick} src={backImage} alt="Back" />
                    </div>
                </div>
                {musicFile?<audio ref={audioRef} src={musicFile}></audio>:<></>}
            </div>
        </>
    );
};

export default FlipCard;
