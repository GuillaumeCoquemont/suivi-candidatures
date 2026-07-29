/**
 * Statuts possibles d'une candidature, dans l'ordre du cycle de vie.
 * @type {Record<string, string>}
 */
export const STATUTS = {
  A_POSTULER: 'a_postuler',
  POSTULE: 'postule',
  RELANCE: 'relance',
  ENTRETIEN: 'entretien',
  OFFRE: 'offre',
  REFUSE: 'refuse',
  ACCEPTE: 'accepte',
}

/**
 * Libellés affichables pour chaque statut de candidature.
 * @type {Record<string, string>}
 */
export const STATUT_LABELS = {
  [STATUTS.A_POSTULER]: 'À postuler',
  [STATUTS.POSTULE]: 'Postulé',
  [STATUTS.RELANCE]: 'Relancé',
  [STATUTS.ENTRETIEN]: 'Entretien',
  [STATUTS.OFFRE]: 'Offre reçue',
  [STATUTS.REFUSE]: 'Refusé',
  [STATUTS.ACCEPTE]: 'Accepté',
}

/**
 * Couleurs associées à chaque statut, utilisées par le composant Badge.
 * @type {Record<string, string>}
 */
export const STATUT_COULEURS = {
  [STATUTS.A_POSTULER]: 'gris',
  [STATUTS.POSTULE]: 'bleu',
  [STATUTS.RELANCE]: 'orange',
  [STATUTS.ENTRETIEN]: 'violet',
  [STATUTS.OFFRE]: 'vert',
  [STATUTS.REFUSE]: 'rouge',
  [STATUTS.ACCEPTE]: 'vert',
}

/**
 * Statuts pour lesquels une relance peut être proposée à l'utilisateur.
 * @type {string[]}
 */
export const STATUTS_RELANCABLES = [STATUTS.POSTULE, STATUTS.RELANCE]

/**
 * Nombre de jours sans réponse au-delà duquel une relance est suggérée.
 * @type {number}
 */
export const DELAI_RELANCE_JOURS = 10

/**
 * Clé utilisée pour persister les candidatures dans le localStorage.
 * @type {string}
 */
export const STORAGE_KEY = 'suivi-candidature.candidatures'

/**
 * Durée d'affichage par défaut d'un toast, en millisecondes.
 * @type {number}
 */
export const TOAST_DUREE_MS = 3000

/**
 * Types de toast supportés par le composant Toast.
 * @type {Record<string, string>}
 */
export const TOAST_TYPES = {
  SUCCES: 'succes',
  ERREUR: 'erreur',
  INFO: 'info',
}
