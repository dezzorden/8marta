import React, { createContext, useContext, useState } from "react";

const CardFlipContext = createContext();

export const useCardFlipContext = () => useContext(CardFlipContext);

export const CardFlipProvider = ({ children }) => {
    const [openCardId, setOpenCardId] = useState(null);
    const [fireWork, setFireWork] = useState(false);

    const handleCardFlip = (id) => {
            if (openCardId === id) {
                setOpenCardId(null);
                setFireWork(false);
            } else {
                setOpenCardId(id);
                setFireWork(true);
            }

    };

    return (
        <CardFlipContext.Provider value={{ openCardId, handleCardFlip, fireWork }}>
            {children}
        </CardFlipContext.Provider>
    );
};