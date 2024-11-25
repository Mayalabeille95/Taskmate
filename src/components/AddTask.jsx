// Déclaration du composant fonctionnel AddTask qui prend en paramètres : handleSubmit, editid, task, setTask
const AddTask = ({ handleSubmit, editid, task, setTask }) => {
  return (
    // Balise section qui sert de conteneur principal pour le composant
    <section className="addTask">
      {/* Formulaire qui appelle la fonction handleSubmit lors de la soumission */}
      <form onSubmit={handleSubmit}>
        {/* Champ de texte pour saisir la tâche, avec un événement onChange pour mettre à jour la valeur de task */}
        <input
          type="text" // Définition du type de champ de formulaire (texte)
          name="task" // Nom du champ pour référence
          value={task} // La valeur de l'input est liée à la variable "task"
          autoComplete="off" // Désactive la fonctionnalité d'auto-complétion du navigateur
          placeholder="add task" // Texte d'espace réservé dans l'input
          maxLength="25" // Limite le nombre de caractères à 25
          onChange={(e) => setTask(e.target.value)} // Met à jour la valeur de "task" chaque fois que l'utilisateur tape
        />
        {/* Bouton de soumission qui affiche "Update" si editid est défini, sinon affiche "Add" */}
        <button type="submit">{editid ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

// Exportation du composant AddTask pour pouvoir l'utiliser ailleurs dans l'application
export default AddTask;

// Le composant AddTask est une fonction qui permet d'ajouter ou de modifier une tâche.
// Il prend quatre paramètres :
// - handleSubmit : fonction qui gère la soumission du formulaire (ajouter ou mettre à jour une tâche).
// - editid : identifiant de la tâche en cours d'édition (si défini, l'input sert à modifier une tâche existante).
// - task : valeur actuelle de la tâche saisie dans l'input.
// - setTask : fonction qui met à jour la valeur de la tâche dans l'état.

// Le composant retourne un formulaire qui permet à l'utilisateur de saisir ou modifier une tâche.
// Ce formulaire comporte plusieurs éléments :
// - Un champ de texte (input) pour entrer le nom de la tâche.
//   Il est lié à la variable d'état "task", et chaque modification de la valeur du champ met à jour cet état.
// - Le champ de texte dispose de plusieurs attributs :
//   - "autoComplete" désactivé pour éviter la saisie automatique par le navigateur.
//   - "maxLength" pour limiter le nombre de caractères à 25.
//   - "placeholder" pour afficher un texte d'exemple à l'intérieur du champ avant que l'utilisateur ne commence à taper.
// - Un bouton de soumission qui change dynamiquement son texte : "Add" si aucune tâche n'est en cours d'édition,
//   ou "Update" si une tâche est en mode édition, basé sur la valeur de `editid`.

// Lorsque le formulaire est soumis, la fonction handleSubmit est exécutée.
// Elle peut ajouter une nouvelle tâche si aucun `editid` n'est défini,
// ou mettre à jour une tâche existante si `editid` est fourni.

// Le composant est exporté afin de pouvoir être utilisé dans d'autres parties de l'application.
