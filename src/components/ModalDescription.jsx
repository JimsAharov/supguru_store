
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { ItemInModal } from './ItemInModal';

export function ModalDescription(props) {
  

  return (
    
    <>
    <Button onClick={()=>props.setShowModal(true)}>ShowModal</Button>
      <Modal show={props.showModal} size="xl" onHide={() => {props.setShowModal(false); props.setSelectItem(undefined)}}>
        <Modal.Header closeButton>
          <Modal.Title>{props.selectItem ? props.selectItem.model : "load"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemInModal setShowModal={props.setShowModal} setShowOrderPage={props.setShowOrderPage}  selectItem={props.selectItem}/>
          
        </Modal.Body>
        
      </Modal>
    </>
  );
}