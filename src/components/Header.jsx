// En-tête de l'application : titre + bouton d'ajout d'une candidature.
// Props : onNouvelleCandidature (function) — appelé au clic sur le bouton.
function Header({ onNouvelleCandidature }) {
  return (
    <header className="header">
      <h1>Suivi de candidatures</h1>
      <button type="button" onClick={onNouvelleCandidature}>
        Nouvelle candidature
      </button>
    </header>
  )
}

export default Header
