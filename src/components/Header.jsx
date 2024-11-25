// Importation du logo à partir du dossier des assets
import logo from "../assets/logo.svg";

// Déclaration du composant Header qui prend en paramètres : children, theme, setTheme
const Header = ({ children, theme, setTheme }) => {
  return (
    // Balise header servant de conteneur pour l'en-tête de la page
    <header>
      {/* Conteneur pour le logo et le texte (enfant) */}
      <span className="logo">
        {/* Affichage du logo importé */}
        <img src={logo} alt="" />
        {/* Affichage du texte passé en tant qu'enfant dans le composant */}
        <span>{children}</span>
      </span>
      {/* Conteneur pour les boutons de sélection de thème */}
      <span className="themeSelector">
        {/* Bouton pour sélectionner le thème "light", change le thème en "light" lorsque cliqué */}
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light activeTheme" : "light"} // Classe dynamique selon si le thème est "light"
        ></span>
        {/* Bouton pour sélectionner le thème "medium", change le thème en "medium" lorsque cliqué */}
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium activeTheme" : "medium"} // Classe dynamique selon si le thème est "medium"
        ></span>
        {/* Bouton pour sélectionner le thème "dark", change le thème en "dark" lorsque cliqué */}
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark activeTheme" : "dark"} // Classe dynamique selon si le thème est "dark"
        ></span>
        {/* Bouton pour sélectionner le thème "gOne", change le thème en "gOne" lorsque cliqué */}
        <span
          onClick={() => setTheme("gOne")}
          className={theme === "gOne" ? "gOne activeTheme" : "gOne"} // Classe dynamique selon si le thème est "gOne"
        ></span>
        {/* Bouton pour sélectionner le thème "gTwo", change le thème en "gTwo" lorsque cliqué */}
        <span
          onClick={() => setTheme("gTwo")}
          className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"} // Classe dynamique selon si le thème est "gTwo"
        ></span>
        {/* Bouton pour sélectionner le thème "gThree", change le thème en "gThree" lorsque cliqué */}
        <span
          onClick={() => setTheme("gThree")}
          className={theme === "gThree" ? "gThree activeTheme" : "gThree"} // Classe dynamique selon si le thème est "gThree"
        ></span>
      </span>
    </header>
  );
};

// Exportation du composant Header pour pouvoir l'utiliser ailleurs dans l'application
export default Header;

// Importation du logo à partir du dossier des assets
// Le logo est stocké dans le fichier logo.svg qui se trouve dans le dossier "../assets"

// Déclaration du composant Header qui prend en paramètres :
// - children : tout contenu HTML passé entre les balises <Header> dans le composant parent
// - theme : l'état actuel du thème (peut être "light", "medium", "dark", etc.)
// - setTheme : fonction pour mettre à jour l'état du thème

// Le composant retourne un élément <header> qui sert de conteneur pour l'en-tête de la page
// Dans cet en-tête, il y a deux sections principales : le logo et la sélection de thème

// Première section : logo et texte
// - Affiche le logo importé sous forme d'image
// - Affiche également le texte passé en tant qu'enfant du composant (children)

// Conteneur pour les boutons de sélection de thème
// Chaque bouton change le thème de l'application lorsque cliqué

// Bouton pour sélectionner le thème "light"
// La classe 'activeTheme' est ajoutée si le thème actuellement sélectionné est "light"

// Bouton pour sélectionner le thème "medium"
// La classe 'activeTheme' est ajoutée si le thème actuellement sélectionné est "medium"

// Bouton pour sélectionner le thème "dark"
// La classe 'activeTheme' est ajoutée si le thème actuellement sélectionné est "dark"

// Bouton pour sélectionner le thème "gOne"
// La classe 'activeTheme' est ajoutée si le thème actuellement sélectionné est "gOne"

// Bouton pour sélectionner le thème "gTwo"
// La classe 'activeTheme' est ajoutée si le thème actuellement sélectionné est "gTwo"

// Bouton pour sélectionner le thème "gThree"
// La classe 'activeTheme' est ajoutée si le thème actuellement sélectionné est "gThree"

// Ces boutons permettent de modifier le thème de l'application via la fonction setTheme

// Le composant Header est exporté pour être utilisé dans d'autres parties de l'application
