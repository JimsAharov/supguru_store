import Modal from "react-bootstrap/Modal";


export function PayShipModal(props) {
  return (<>
    <Modal show={props.showPayShipModal} size="lg" onHide={() => props.setShowPayShipModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Оплата и доставка</Modal.Title>
      </Modal.Header>
      <Modal.Body> <div className="pay_ship_text">
      <h5>Оформить заказ можно несколькими способами:</h5>
        <ul>
          <li>Через каталог нашего сайта</li>
          <li>
            По номеру <b>+79115175912</b> / <b>+79115062870</b> (доступны в WhatsApp и
            Telegram)
          </li>
          <li>
            Через наш магазин<a href="https://vk.com/supguru"><b>ВКонтакте</b></a>
          </li>
        </ul>
        <h5>Оплата</h5>{" "}
        <ul>
          <li>
            Наличными или банковским переводом после того как Вы осмотрели товар
            и проверили комплектацию.
          </li>
        </ul>
        <h5>Способы доставки</h5>{" "}
        <ul>
          <li>
            Отгрузка со склада - Вы сможете самостоятельно забрать заказанный
            Вами товар у нашего представителя в Череповце.
          </li>
          <li>Доставка курьером в пределах г. Череповца: +300 руб.</li>
          <li>
            Доставка в регионы РФ любой транспортной компанией при 100%
            предоплате.
          </li>
        </ul>
      </div>
        
      </Modal.Body>
      
    </Modal>
   
    </>
  );
}
