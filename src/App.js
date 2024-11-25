// Importation des hooks useState et useEffect de React
import { useState, useEffect } from "react";
// Importation du fichier CSS pour les styles de l'application
import "./App.css";
// Importation des composants Header, AddTask et ShowTask
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";

function App() {
  // Déclaration de l'état task pour gérer la tâche saisie dans l'input
  const [task, setTask] = useState("");
  // Déclaration de l'état tasklist pour gérer la liste des tâches (initialisée avec les tâches sauvegardées dans localStorage si présentes)
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  // Déclaration de l'état editid pour gérer l'édition de tâche (initialisé à 0)
  const [editid, setEditid] = useState(0);
  // Déclaration de l'état theme pour gérer le thème de l'application (initialisé à "medium" ou celui stocké dans localStorage)
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "medium"
  );

  // Fonction de soumission du formulaire pour ajouter ou mettre à jour une tâche
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    if (editid) {
      // Si editid est défini, on modifie une tâche existante
      const date = new Date();
      // Trouve la tâche sélectionnée à modifier
      const selectedTask = tasklist.find((task) => task.id === editid);
      // Met à jour la tâche sélectionnée avec le nouveau nom et la nouvelle date/heure
      const updateTask = tasklist.map((e) =>
        e.id === selectedTask.id
          ? (e = {
              id: e.id,
              name: task,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            })
          : { id: e.id, name: e.name, time: e.time }
      );
      setTasklist(updateTask); // Met à jour la liste des tâches
      setEditid(0); // Réinitialise l'id d'édition pour revenir à l'ajout de nouvelle tâche
      setTask(""); // Réinitialise le champ de saisie
      return;
    }

    // Si editid n'est pas défini, on ajoute une nouvelle tâche
    if (task) {
      const date = new Date();
      setTasklist([
        ...tasklist, // Conserve les tâches existantes
        {
          id: date.getTime(), // Utilise l'heure actuelle comme identifiant unique
          name: task, // Nom de la tâche saisie
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`, // Heure et date actuelles
        },
      ]);
      setTask(""); // Réinitialise le champ de saisie
    }
  };

  // Fonction pour activer l'édition d'une tâche en remplissant le champ de saisie avec son nom
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask.name); // Remplir l'input avec le nom de la tâche sélectionnée
    setEditid(id); // Définit l'editid à l'id de la tâche sélectionnée pour la modification
  };

  // Fonction pour supprimer une tâche de la liste
  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTasklist); // Met à jour la liste des tâches en supprimant la tâche sélectionnée
  };

  // Utilisation de useEffect pour sauvegarder tasklist dans le localStorage chaque fois qu'il change
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  // Utilisation de useEffect pour sauvegarder le thème dans le localStorage chaque fois qu'il change
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    // Application de la classe dynamique "theme" au conteneur principal en fonction de l'état du thème
    <div className={"App " + theme}>
      <div className="container">
        {/* Composant Header affichant le titre et permettant de changer le thème */}
        <Header setTheme={setTheme} theme={theme}>
          Taskmate
        </Header>
        {/* Composant AddTask pour ajouter ou modifier des tâches */}
        <AddTask
          handleSubmit={handleSubmit}
          editid={editid}
          task={task}
          setTask={setTask}
        />
        {/* Composant ShowTask pour afficher la liste des tâches */}
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

// Exportation du composant principal App pour pouvoir l'utiliser dans d'autres fichiers
export default App;

// Ce code constitue l'application principale d'une gestion de tâches (ou "Todo List") construite avec React.
// Voici un résumé de son fonctionnement :

// 1. Gestion des tâches :
// L'application permet à l'utilisateur d'ajouter, modifier et supprimer des tâches. Ces actions sont gérées par
// l'état `task` (pour la tâche en cours d'édition), `tasklist` (qui contient toutes les tâches), et `editid`
// (qui détermine si une tâche est en mode édition). Lorsqu'une tâche est modifiée, son nom et son horodatage sont mis à jour.

// 2. Persistant avec `localStorage` :
// Les tâches et le thème de l'application sont enregistrés dans le `localStorage` du navigateur, ce qui permet de préserver
// les données même après le rechargement de la page. Les hooks `useEffect` sont utilisés pour sauvegarder automatiquement
// la liste des tâches et le thème chaque fois qu'ils sont modifiés.

// 3. Thème dynamique :
// L'application permet de changer le thème (par exemple, clair ou sombre) via un état `theme`, et l'interface s'adapte
// en conséquence grâce à une classe CSS dynamique.

// 4. Composants utilisés :
// - **Header** : Affiche le titre de l'application et permet de changer le thème.
// - **AddTask** : Un formulaire pour ajouter ou modifier des tâches.
// - **ShowTask** : Affiche la liste des tâches avec la possibilité de les éditer ou de les supprimer.
