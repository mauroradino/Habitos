import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import FormularioModal from './FormularioModal';
import "../estilosModal.css"

const ModalComponent = ({show , handleClose}) => {
  return (
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Agregar Tarea</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormularioModal/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cerrar
      </Button>
      <Button variant="primary">Agregar</Button>
    </Modal.Footer>
  </Modal>
  )
}

ModalComponent.propTypes = {
    handleClose: PropTypes.func.isRequired,      // El título es una cadena y es obligatorio
    show: PropTypes.bool.isRequired,    // El estado de visibilidad es booleano y es obligatorio
  };

export default ModalComponent
