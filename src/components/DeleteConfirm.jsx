// Boîte de dialogue de confirmation avant suppression d'une candidature.
// Props : candidature (object), onConfirmer (function), onAnnuler (function).
function DeleteConfirm({ candidature, onConfirmer, onAnnuler }) {
  return (
    <div className="delete-confirm" role="alertdialog">
      <p>
        Supprimer la candidature chez <strong>{candidature.entreprise}</strong>{' '}
        ({candidature.poste}) ?
      </p>
      <div className="delete-confirm__actions">
        <button type="button" onClick={onAnnuler}>
          Annuler
        </button>
        <button type="button" onClick={onConfirmer}>
          Supprimer
        </button>
      </div>
    </div>
  )
}

export default DeleteConfirm
