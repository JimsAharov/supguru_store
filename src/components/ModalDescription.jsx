
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalDescription(props) {
  

  return (
    
    <>
    <Button onClick={()=>props.setShowModal(true)}>ShowModal</Button>
      <Modal show={props.showModal} fullscreen={true} onHide={() => {props.setShowModal(false); props.setSelectItem(undefined)}}>
        <Modal.Header closeButton>
          <Modal.Title>{props.selectItem? props.selectItem.model : "load"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}