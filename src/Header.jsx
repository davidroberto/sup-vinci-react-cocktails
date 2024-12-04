const Header = ({ userName }) => {
  return (
    <header>
      <h2>Les cocktails de Roberto</h2>

      <nav>
        <ul>
          <li>Accueil</li>
        </ul>
      </nav>

      <p>Vous êtes {userName}</p>
    </header>
  );
};

export default Header;
