import { useEffect, useState } from "react";
import AllCocktails from "./AllCocktails";
import Footer from "./Footer";
import Header from "./Header";
import LastCocktails from "./LastCocktails";
import RandomCocktail from "./RandomCocktail";

function App() {
  // fake appel fetch pour l'user connecté
  const userName = "David Robert";

  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCocktails(data.drinks);
      });
  }, []);

  return (
    <>
      <Header userName={userName} />
      <LastCocktails bestCocktail={"Ti Punch"} cocktails={cocktails} />
      <RandomCocktail />
      <AllCocktails cocktails={cocktails} />
      <Footer userName={userName} />
    </>
  );
}

export default App;
