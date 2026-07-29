// Notification éphémère affichée à l'écran.
// Props : message (string), type (une valeur de TOAST_TYPES), onFermeture (function).
function Toast({ message, type, onFermeture }) {
  return (
    <div className={`toast toast--${type}`} role="status">
      <p>{message}</p>
      <button type="button" onClick={onFermeture} aria-label="Fermer">
        ×
      </button>
    </div>
  )
}

export default Toast
