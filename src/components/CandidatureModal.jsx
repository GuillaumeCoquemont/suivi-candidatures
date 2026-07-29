import { useState } from 'react'
import { STATUT_LABELS, STATUTS } from '../constants'
import { aujourdHuiISO } from '../utils/dates'

const CANDIDATURE_VIDE = {
  entreprise: '',
  poste: '',
  statut: STATUTS.A_POSTULER,
  dateCandidature: aujourdHuiISO(),
  lienOffre: '',
  contact: '',
  notes: '',
}

// Formulaire d'ajout ou de modification d'une candidature.
// Props : candidature (object|null) — null en création, onEnregistrer (function), onFermer (function).
function CandidatureModal({ candidature, onEnregistrer, onFermer }) {
  const [formulaire, setFormulaire] = useState(candidature ?? CANDIDATURE_VIDE)

  function mettreAJourChamp(champ, valeur) {
    setFormulaire((precedent) => ({ ...precedent, [champ]: valeur }))
  }

  function gererSoumission(evenement) {
    evenement.preventDefault()
    onEnregistrer(formulaire)
  }

  return (
    <div className="candidature-modal" role="dialog" aria-modal="true">
      <form onSubmit={gererSoumission}>
        <h2>{candidature ? 'Modifier la candidature' : 'Nouvelle candidature'}</h2>

        <label htmlFor="entreprise">Entreprise</label>
        <input
          id="entreprise"
          type="text"
          required
          value={formulaire.entreprise}
          onChange={(evenement) =>
            mettreAJourChamp('entreprise', evenement.target.value)
          }
        />

        <label htmlFor="poste">Poste</label>
        <input
          id="poste"
          type="text"
          required
          value={formulaire.poste}
          onChange={(evenement) => mettreAJourChamp('poste', evenement.target.value)}
        />

        <label htmlFor="statut">Statut</label>
        <select
          id="statut"
          value={formulaire.statut}
          onChange={(evenement) => mettreAJourChamp('statut', evenement.target.value)}
        >
          {Object.values(STATUTS).map((statut) => (
            <option key={statut} value={statut}>
              {STATUT_LABELS[statut]}
            </option>
          ))}
        </select>

        <label htmlFor="dateCandidature">Date de candidature</label>
        <input
          id="dateCandidature"
          type="date"
          required
          value={formulaire.dateCandidature}
          onChange={(evenement) =>
            mettreAJourChamp('dateCandidature', evenement.target.value)
          }
        />

        <label htmlFor="lienOffre">Lien de l'offre</label>
        <input
          id="lienOffre"
          type="url"
          value={formulaire.lienOffre}
          onChange={(evenement) =>
            mettreAJourChamp('lienOffre', evenement.target.value)
          }
        />

        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          type="text"
          value={formulaire.contact}
          onChange={(evenement) => mettreAJourChamp('contact', evenement.target.value)}
        />

        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={formulaire.notes}
          onChange={(evenement) => mettreAJourChamp('notes', evenement.target.value)}
        />

        <div className="candidature-modal__actions">
          <button type="button" onClick={onFermer}>
            Annuler
          </button>
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  )
}

export default CandidatureModal
