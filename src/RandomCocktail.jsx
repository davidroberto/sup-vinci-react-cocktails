import { useEffect, useState } from "react";

const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  const fetchCocktail = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandomCocktail(data.drinks[0]);
      });
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  const handleChangeRandomCocktail = () => {
    fetchCocktail();
  };

  if (!randomCocktail) {
    return <p>Cocktail en chargement</p>;
  }

  return (
    <section>
      <h2>Cocktail aléatoire</h2>
      <button onClick={handleChangeRandomCocktail}>Changer le cocktail</button>

      <article>
        <p>{randomCocktail.strDrink}</p>
        <img width={"300px"} src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
      </article>
    </section>
  );
};

export default RandomCocktail;
