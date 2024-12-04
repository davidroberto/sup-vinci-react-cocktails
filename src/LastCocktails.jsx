import { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";

const LastCocktails = ({ bestCocktail }) => {
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const lastCocktails = data.drinks.slice(0, 10);
        setCocktails(lastCocktails);
      });
  }, []);

  if (!cocktails) {
    return <p>Cocktails en chargement</p>;
  }

  return (
    <section>
      <p>Le meilleur cocktail est {bestCocktail}</p>
      <h2>Les meilleurs cocktails : </h2>
      {cocktails.map((cocktail) => {
        return <CocktailCard cocktail={cocktail} />;
      })}
    </section>
  );
};

export default LastCocktails;
