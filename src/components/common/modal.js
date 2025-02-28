const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
