import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const DrinkContext = createContext();

// 2. Custom hook to use the context
export const useDrink = () => useContext(DrinkContext);

// 3. Context Provider Component
export const DrinkProvider = ({ children }) => {
  const [drinkType, setDrinkType] = useState('wine'); // default is wine

  const changeDrink = (type) => {
    switch (type) {
      case 'wine':
      case 'beer':
      case 'cocktail':
        setDrinkType(type);
        break;
      default:
        console.warn(`Unsupported drink type: ${type}`);
        setDrinkType('wine');
    }
  };

  return (
    <DrinkContext.Provider value={{ drinkType, changeDrink }}>
      {children}
    </DrinkContext.Provider>
  );
};
