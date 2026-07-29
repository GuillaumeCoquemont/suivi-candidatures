import { useEffect, useMemo, useState } from 'react'
import {
  DELAI_RELANCE_JOURS,
  STATUTS,
  STATUTS_RELANCABLES,
  STORAGE_KEY,
} from '../constants'
import { candidaturesInitiales } from '../data/initialData'
import { aujourdHuiISO, estRelanceNecessaire } from '../utils/dates'

// Lit les candidatures depuis localStorage, avec repli sur les données de démo.
function chargerCandidatures() {
  try {
    const brut = window.localStorage.getItem(STORAGE_KEY)
    if (!brut) return candidaturesInitiales
    const parsees = JSON.parse(brut)
    return Array.isArray(parsees) ? parsees : candidaturesInitiales
  } catch {
    return candidaturesInitiales
  }
}

// Hook central de gestion des candidatures : persistance, CRUD, filtrage
// et statistiques. Seul point d'accès à la logique métier de l'app.
export function useCandidatures() {
  const [candidatures, setCandidatures] = useState(chargerCandidatures)
  const [recherche, setRecherche] = useState('')
  const [statutFiltre, setStatutFiltre] = useState('')

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(candidatures))
  }, [candidatures])

  function ajouterCandidature(candidature) {
    const nouvelleCandidature = {
      ...candidature,
      id: crypto.randomUUID(),
      derniereAction: candidature.dateCandidature ?? aujourdHuiISO(),
    }
    setCandidatures((precedentes) => [...precedentes, nouvelleCandidature])
  }

  function modifierCandidature(id, modifications) {
    setCandidatures((precedentes) =>
      precedentes.map((candidature) =>
        candidature.id === id
          ? { ...candidature, ...modifications }
          : candidature,
      ),
    )
  }

  function supprimerCandidature(id) {
    setCandidatures((precedentes) =>
      precedentes.filter((candidature) => candidature.id !== id),
    )
  }

  const candidaturesFiltrees = useMemo(() => {
    return candidatures.filter((candidature) => {
      const correspondRecherche =
        recherche.trim() === '' ||
        candidature.entreprise.toLowerCase().includes(recherche.toLowerCase()) ||
        candidature.poste.toLowerCase().includes(recherche.toLowerCase())
      const correspondStatut =
        statutFiltre === '' || candidature.statut === statutFiltre
      return correspondRecherche && correspondStatut
    })
  }, [candidatures, recherche, statutFiltre])

  const candidaturesARelancer = useMemo(() => {
    return candidatures.filter((candidature) =>
      estRelanceNecessaire(
        candidature.statut,
        candidature.derniereAction,
        STATUTS_RELANCABLES,
        DELAI_RELANCE_JOURS,
      ),
    )
  }, [candidatures])

  const statistiques = useMemo(() => {
    return Object.values(STATUTS).reduce((compteurs, statut) => {
      compteurs[statut] = candidatures.filter(
        (candidature) => candidature.statut === statut,
      ).length
      return compteurs
    }, {})
  }, [candidatures])

  return {
    candidatures,
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
  }
}
