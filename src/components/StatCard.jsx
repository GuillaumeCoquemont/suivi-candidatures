// Affiche une statistique unique (libellé + valeur) dans le tableau de bord.
// Props : libelle (string), valeur (number).
function StatCard({ libelle, valeur }) {
  return (
    <div className="stat-card">
      <p className="stat-card__valeur">{valeur}</p>
      <p className="stat-card__libelle">{libelle}</p>
    </div>
  )
}

export default StatCard
