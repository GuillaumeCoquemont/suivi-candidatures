import CandidatureCard from './components/CandidatureCard'
import Filters from './components/Filters'
import Header from './components/Header'
import StatCard from './components/StatCard'
import { STATUT_LABELS, STATUTS } from './constants'
import { useCandidatures } from './hooks/useCandidatures'

// Point d'entrée de l'application : assemble le hook métier useCandidatures
// avec les composants d'affichage. Aucune logique métier ici, uniquement
// de l'orchestration (état d'UI et branchement des props/callbacks).
function App() {
  const {
    candidaturesFiltrees,
    statistiques,
    recherche,
    setRecherche,
    statutFiltre,
    setStatutFiltre,
  } = useCandidatures()

  return (
    <>
      <Header onNouvelleCandidature={() => {}} />

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
          <CandidatureCard key={candidature.id} candidature={candidature} />
        ))}
      </section>
    </>
  )
}

export default App
