// Bannière listant les candidatures à relancer.
// Props : candidaturesARelancer (array) — déjà filtré par useCandidatures.
function AlerteRelances({ candidaturesARelancer }) {
  if (candidaturesARelancer.length === 0) return null

  return (
    <aside className="alerte-relances" role="status">
      <p>{candidaturesARelancer.length} candidature(s) à relancer :</p>
      <ul>
        {candidaturesARelancer.map((candidature) => (
          <li key={candidature.id}>
            {candidature.entreprise} — {candidature.poste}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default AlerteRelances
