import { useEffect, useState } from 'react'
import AlerteRelances from './components/AlerteRelances'
import CandidatureCard from './components/CandidatureCard'
import CandidatureModal from './components/CandidatureModal'
import DeleteConfirm from './components/DeleteConfirm'
import Filters from './components/Filters'
import Header from './components/Header'
import StatCard from './components/StatCard'
import Toast from './components/Toast'
import { STATUT_LABELS, STATUTS, TOAST_DUREE_MS, TOAST_TYPES } from './constants'
import { useCandidatures } from './hooks/useCandidatures'

// Point d'entrée de l'application : assemble le hook métier useCandidatures
// avec les composants d'affichage. Aucune logique métier ici, uniquement
// de l'orchestration (état d'UI et branchement des props/callbacks).
function App() {
  const {
    candidaturesFiltrees,
    candidaturesARelancer,
    statistiques,
    recherche,
    setRecherche,
    statutFiltre,
    setStatutFiltre,
    ajouterCandidature,
    modifierCandidature,
    supprimerCandidature,
  } = useCandidatures()

  const [modaleOuverte, setModaleOuverte] = useState(false)
  const [candidatureEnEdition, setCandidatureEnEdition] = useState(null)
  const [candidatureASupprimer, setCandidatureASupprimer] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const minuteur = setTimeout(() => setToast(null), TOAST_DUREE_MS)
    return () => clearTimeout(minuteur)
  }, [toast])

  function ouvrirCreation() {
    setCandidatureEnEdition(null)
    setModaleOuverte(true)
  }

  function ouvrirEdition(candidature) {
    setCandidatureEnEdition(candidature)
    setModaleOuverte(true)
  }

  function enregistrerCandidature(donnees) {
    if (candidatureEnEdition) {
      modifierCandidature(candidatureEnEdition.id, donnees)
      setToast({ message: 'Candidature modifiée', type: TOAST_TYPES.SUCCES })
    } else {
      ajouterCandidature(donnees)
      setToast({ message: 'Candidature ajoutée', type: TOAST_TYPES.SUCCES })
    }
    setModaleOuverte(false)
  }

  function confirmerSuppression() {
    supprimerCandidature(candidatureASupprimer.id)
    setToast({ message: 'Candidature supprimée', type: TOAST_TYPES.INFO })
    setCandidatureASupprimer(null)
  }

  return (
    <>
      <Header onNouvelleCandidature={ouvrirCreation} />

      <AlerteRelances candidaturesARelancer={candidaturesARelancer} />

      <section className="statistiques">
        {Object.values(STATUTS).map((statut) => (
          <StatCard
            key={statut}
            libelle={STATUT_LABELS[statut]}
            valeur={statistiques[statut] ?? 0}
          />
        ))}
      </section>

      <Filters
        recherche={recherche}
        setRecherche={setRecherche}
        statutFiltre={statutFiltre}
        setStatutFiltre={setStatutFiltre}
      />

      <section className="candidatures-liste">
        {candidaturesFiltrees.map((candidature) => (
          <CandidatureCard
            key={candidature.id}
            candidature={candidature}
            onModifier={ouvrirEdition}
            onSupprimer={setCandidatureASupprimer}
          />
        ))}
      </section>

      {modaleOuverte && (
        <CandidatureModal
          candidature={candidatureEnEdition}
          onEnregistrer={enregistrerCandidature}
          onFermer={() => setModaleOuverte(false)}
        />
      )}

      {candidatureASupprimer && (
        <DeleteConfirm
          candidature={candidatureASupprimer}
          onConfirmer={confirmerSuppression}
          onAnnuler={() => setCandidatureASupprimer(null)}
        />
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onFermeture={() => setToast(null)}
        />
      )}
    </>
  )
}

export default App
