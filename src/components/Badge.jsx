import { STATUT_COULEURS, STATUT_LABELS } from '../constants'

// Affiche le statut d'une candidature sous forme de badge coloré.
// Props : statut (string) — une des valeurs de STATUTS.
function Badge({ statut }) {
  const couleur = STATUT_COULEURS[statut] ?? 'gris'
  const libelle = STATUT_LABELS[statut] ?? statut

  return <span className={`badge badge--${couleur}`}>{libelle}</span>
}

export default Badge
