import CocktailCard from "./CocktailCard";

const AllCocktails = ({ cocktails }) => {
  if (!cocktails) {
    return <p>Cocktails en chargement</p>;
  }

  return (
    <section>
      <h2>Tous les cocktails : </h2>
      {cocktails.map((cocktail) => {
        return <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />;
      })}
    </section>
  );
};

export default AllCocktails;
