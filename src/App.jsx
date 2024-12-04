import Footer from "./Footer";
import Header from "./Header";
import LastCocktails from "./LastCocktails";
import RandomCocktail from "./RandomCocktail";

function App() {
  // fake appel fetch pour l'user connecté
  const userName = "David Robert";

  return (
    <>
      <Header userName={userName} />
      <LastCocktails bestCocktail={"Ti Punch"} />
      <RandomCocktail />
      <Footer userName={userName} />
    </>
  );
}

export default App;
