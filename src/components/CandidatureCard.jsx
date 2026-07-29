import Badge from './Badge'
import { formaterDate } from '../utils/dates'

// Affiche les informations d'une candidature dans une carte.
// Props : candidature (object) — une entrée du tableau candidatures.
function CandidatureCard({ candidature }) {
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
    </article>
  )
}

export default CandidatureCard
