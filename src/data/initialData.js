import { STATUTS } from '../constants'

// Jeu de données de démonstration chargé au tout premier lancement,
// avant qu'il y ait quoi que ce soit en localStorage.
export const candidaturesInitiales = [
  {
    id: 'c-001',
    entreprise: 'Capgemini',
    poste: 'Développeur Front-End React',
    statut: STATUTS.ENTRETIEN,
    dateCandidature: '2026-07-10',
    derniereAction: '2026-07-20',
    lienOffre: 'https://www.capgemini.com/carrieres',
    contact: 'recrutement@capgemini.com',
    notes: 'Entretien technique prévu le 2026-08-05.',
  },
  {
    id: 'c-002',
    entreprise: 'OVHcloud',
    poste: 'Développeur Full-Stack',
    statut: STATUTS.POSTULE,
    dateCandidature: '2026-07-15',
    derniereAction: '2026-07-15',
    lienOffre: 'https://careers.ovhcloud.com',
    contact: '',
    notes: '',
  },
  {
    id: 'c-003',
    entreprise: 'Doctolib',
    poste: 'Ingénieur Logiciel',
    statut: STATUTS.REFUSE,
    dateCandidature: '2026-06-20',
    derniereAction: '2026-07-01',
    lienOffre: 'https://www.doctolib.fr/carrieres',
    contact: '',
    notes: 'Refus après entretien RH.',
  },
]
