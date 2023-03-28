import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function ConfirmOrderModal(props) {
  return (
    <Modal show={props.showConfirmOrderModal} centered="true" size="sm">
      <Modal.Body>
        <div className="confirm_order_container">
           
          <p>
            <b>Заказ принят в обработку</b>
          </p>
          <div className="confirm_order_container">Скоро наши менеджеры с Вами свяжутся. Если у Вас остались вопросы,
            Вы всегда можете позвонить или написать нам по контактам, указанным
            на сайте.</div>
            
          
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => props.setShowConfirmOrderModal(false)}
        >
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
