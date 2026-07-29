import Badge from './Badge'
import { formaterDate } from '../utils/dates'

// Affiche les informations d'une candidature dans une carte, avec les
// actions de modification et de suppression.
// Props : candidature (object), onModifier (function), onSupprimer (function).
function CandidatureCard({ candidature, onModifier, onSupprimer }) {
  return (
    <article className="candidature-card">
      <div className="candidature-card__entete">
        <h3>{candidature.entreprise}</h3>
        <Badge statut={candidature.statut} />
      </div>
      <p className="candidature-card__poste">{candidature.poste}</p>
      <p className="candidature-card__date">
        Candidature envoyée le {formaterDate(candidature.dateCandidature)}
      </p>
      <div className="candidature-card__actions">
        <button type="button" onClick={() => onModifier(candidature)}>
          Modifier
        </button>
        <button type="button" onClick={() => onSupprimer(candidature)}>
          Supprimer
        </button>
      </div>
    </article>
  )
}

export default CandidatureCard
