import React from "react";
import { useDrink } from "../contexts/DrinkContext";

export default function DrinkSwitcher() {
  const { drinkType, changeDrink } = useDrink();

  const drinks = ["wine", "beer", "cocktail"];

  return (
    <div className="drink-switcher">
      <p>Select what you are sampling today:</p>
      <div className="drink-buttons">
        {drinks.map((type) => (
          <button
            key={type}
            className={drinkType === type ? "active" : ""}
            onClick={() => changeDrink(type)}>
            {type === "wine" && "🍷 Wine"}
            {type === "beer" && "🍺 Beer"}
            {type === "cocktail" && "🍸 Cocktail"}
          </button>
        ))}
      </div>
    </div>
  );
}
