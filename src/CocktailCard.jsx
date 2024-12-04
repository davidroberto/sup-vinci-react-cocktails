const CocktailCard = ({ cocktail }) => {
  return (
    <article>
      <p>{cocktail.strDrink}</p>
      <img width={"300px"} src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
    </article>
  );
};

function addNumbers(a, b) {
  return a + b;
}

export default CocktailCard;