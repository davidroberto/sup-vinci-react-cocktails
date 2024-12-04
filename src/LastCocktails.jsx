import CocktailCard from "./CocktailCard";

const LastCocktails = ({ bestCocktail, cocktails }) => {
  const lastCocktails = cocktails.slice(0, 10);

  if (!cocktails) {
    return <p>Cocktails en chargement</p>;
  }

  return (
    <section>
      <p>Le meilleur cocktail est {bestCocktail}</p>
      <h2>Les meilleurs cocktails : </h2>
      {lastCocktails.map((cocktail) => {
        return <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />;
      })}
    </section>
  );
};

export default LastCocktails;
