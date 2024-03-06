import React, {useEffect, useRef, useState} from 'react';
import Fireworks from "@fireworks-js/react";

const FireworksDisplay = ({toggle}) => {
    const ref = useRef(null)
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        console.log('toggle',toggle)
       if(toggle){
           setOpacity(1)
           ref.current.start()
       }else {
           ref.current.stop()
           setOpacity(0)
       }
    }, [toggle]);

    return (
        <>
            <div
                style={{ display: 'flex', gap: '4px', position: 'absolute', zIndex: 2, }}
            >
            </div>
            <Fireworks
                ref={ref}
                options={{ opacity: 0.2 ,
                    rocketsPoint:{
                        min: 0,
                        max: 100
                    },
                    friction:1,
                    particles:100
            }}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    background: 'transparent',
                    opacity:opacity,
                }}
            />
        </>
    )
};

export default FireworksDisplay;