import { STATUT_LABELS, STATUTS } from '../constants'

// Barre de filtres : recherche texte + sélection de statut.
// Props : recherche, setRecherche, statutFiltre, setStatutFiltre.
function Filters({ recherche, setRecherche, statutFiltre, setStatutFiltre }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Rechercher une entreprise ou un poste"
        value={recherche}
        onChange={(evenement) => setRecherche(evenement.target.value)}
      />
      <select
        value={statutFiltre}
        onChange={(evenement) => setStatutFiltre(evenement.target.value)}
      >
        <option value="">Tous les statuts</option>
        {Object.values(STATUTS).map((statut) => (
          <option key={statut} value={statut}>
            {STATUT_LABELS[statut]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filters
