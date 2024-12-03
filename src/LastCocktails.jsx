import { useEffect, useState } from "react";

const LastCocktails = () => {
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
      <h2>Les meilleurs cocktails : </h2>
      {cocktails.map((cocktail) => {
        return (
          <article key={cocktail.idDrink}>
            <p>{cocktail.strDrink}</p>
            <img width={"300px"} src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </article>
        );
      })}
    </section>
  );
};

export default LastCocktails;
