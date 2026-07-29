/**
 * Formate une date ISO (YYYY-MM-DD) au format français lisible (ex: "29/07/2026").
 * @param {string} dateISO - Date au format ISO YYYY-MM-DD.
 * @returns {string} Date formatée en jj/mm/aaaa, ou chaîne vide si invalide.
 */
export function formaterDate(dateISO) {
  if (!dateISO) return ''
  const date = new Date(dateISO)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

/**
 * Retourne la date du jour au format ISO YYYY-MM-DD.
 * @returns {string} Date du jour au format ISO.
 */
export function aujourdHuiISO() {
  return new Date().toISOString().slice(0, 10)
}

/**
 * Calcule le nombre de jours écoulés entre une date ISO et aujourd'hui.
 * @param {string} dateISO 
 * @returns {number}
 */
export function joursDepuis(dateISO) {
  const date = new Date(dateISO)
  if (Number.isNaN(date.getTime())) return 0
  const maintenant = new Date(aujourdHuiISO())
  const diffMs = maintenant.getTime() - date.getTime()
  return Math.floor(diffMs / (1000 * 60 * 60 * 24))
}

/**
 * Détermine si une relance est nécessaire pour une candidature, en fonction
 * de son statut et du délai écoulé depuis la dernière action.
 * @param {string} statut
 * @param {string} derniereActionISO 
 * @param {string[]} statutsRelancables
 * @param {number} delaiJours
 * @returns {boolean} 
 */
export function estRelanceNecessaire(
  statut,
  derniereActionISO,
  statutsRelancables,
  delaiJours,
) {
  if (!statutsRelancables.includes(statut)) return false
  return joursDepuis(derniereActionISO) >= delaiJours
}
