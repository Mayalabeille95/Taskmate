// Déclaration du composant ShowTask qui prend en paramètres : tasklist, setTasklist, handleEdit, handleDelete
const ShowTask = ({ tasklist, setTasklist, handleEdit, handleDelete }) => {
  return (
    // Balise section servant de conteneur principal pour l'affichage des tâches
    <section className="showTask">
      {/* Entête affichant le titre et le nombre de tâches */}
      <p className="head">
        <span>
          {/* Titre "Todo" */}
          <span className="title">Todo</span>
          {/* Affichage du nombre de tâches dans la liste */}
          <span className="count">{tasklist.length}</span>
        </span>
        {/* Bouton "Clear All" pour effacer toutes les tâches */}
        <span className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </span>
      </p>
      {/* Liste des tâches */}
      <ul>
        {/* Boucle sur chaque tâche dans tasklist et affichage dans un élément <li> */}
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              {/* Affichage du nom de la tâche */}
              <span className="name">{task.name}</span>
              {/* Affichage de l'heure ou du temps associé à la tâche */}
              <span className="time">{task.time}</span>
            </p>
            {/* Icône de crayon (pour éditer la tâche), appelée lors du clic */}
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            {/* Icône de poubelle (pour supprimer la tâche), appelée lors du clic */}
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Exportation du composant ShowTask pour pouvoir l'utiliser ailleurs dans l'application
export default ShowTask;

// Composant ShowTask : Ce composant est responsable de l'affichage de la liste des tâches à accomplir.
// Il prend en entrée :
// - tasklist : la liste des tâches à afficher,
// - setTasklist : une fonction pour mettre à jour la liste des tâches,
// - handleEdit : fonction pour éditer une tâche,
// - handleDelete : fonction pour supprimer une tâche.

// tasklist : Contient toutes les tâches à afficher. Chaque tâche est rendue dans un élément <li>,
// qui affiche à la fois le nom de la tâche (task.name) et son heure (task.time).

// Affichage de l'entête :
// - Le titre "Todo" est affiché.
// - Le nombre de tâches dans tasklist est affiché avec l'élément <span className="count">.
// - Un bouton "Clear All" permet de réinitialiser la liste des tâches avec setTasklist([]) pour effacer toutes les tâches.

// Affichage des tâches :
// - Chaque tâche dans tasklist est mappée dans une boucle pour créer un élément <li>.
// - Le nom de la tâche est affiché dans un élément <span className="name">.
// - L'heure de la tâche est affichée dans un autre élément <span className="time">.
// - Des icônes sont présentes à droite de chaque tâche :
//   - Icône de crayon : Permet de modifier une tâche en appelant handleEdit.
//   - Icône de poubelle : Permet de supprimer une tâche en appelant handleDelete.

// Exportation du composant : Le composant ShowTask est exporté à la fin,
// ce qui permet de l'utiliser dans d'autres parties de l'application.
