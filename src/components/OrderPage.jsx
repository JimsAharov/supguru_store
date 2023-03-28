import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from "react-bootstrap";
import { useState } from "react";
import { ConfirmOrderModal } from "./ConfirmOrderModal";

const styles = {
  container: {
    width: "100%",
    margin: "0 auto",
    padding: "0px 30px",
  },
  input: {
    width: "100%",
    height: "50px",
    marginTop: "30px",
    borderRadius: "5px",
    border: "1px solid grey",
  },
  order_form_button: {
    marginTop: "40px",
    marginBottom: "40px",
  },
  mini_order_img: {
    with: "100px",
    height: "100px",
  },
  order_description_section: {
    display: "flex",
    borderBottom: "1px solid lightgrey",
    padding: "0px 30px",
  },
  order_p: {
    marginBottom: "2px",
    fontWeight: "bold",
  },
  order_description_text: {
    marginLeft: "40px",
  },
  order_price_section: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px 30px",
  },
};

export function OrderPage(props) {
  
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [showConfirmOrderModal, setShowConfirmOrderModal] = useState(false)

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    fetch(
      `https://api.telegram.org/bot5916265051:AAElzZRUOTI-1cH7OqYcaqQyINKCdGfPAIA/sendMessage?chat_id=-1001837804274&text=${name}%20${tel}%20${props.selectItem.model}%20${props.selectItem.price}`,
      {
        method: "POST",
        
      }
    )
      props.setShowOrderPage(false)
      
  };

  return (<>
    <Modal
      show={props.showOrderPage}
      onHide={() => {
        props.setShowOrderPage(false);
        props.setSelectItem(undefined);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Ваш заказ:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={styles.order_description_section}>
          <Image
            style={styles.mini_order_img}
            src={props.selectItem ? props.selectItem.image : "Load"}
          ></Image>

          <div style={styles.order_description_text}>
            <p style={styles.order_p}>
              {" "}
              {props.selectItem ? props.selectItem.model : "load"}
            </p>
            <ul>
              <li>{props.selectItem ? props.selectItem.param1 : "load"}</li>
              <li>{props.selectItem ? props.selectItem.param2 : "load"}</li>
              <li>{props.selectItem ? props.selectItem.size : "load"}</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div style={styles.order_price_section}>
          <span>Сумма заказа:</span>{" "}
          <span style={styles.order_p}>
            {" "}
            {props.selectItem ? props.selectItem.price : "load"}
          </span>
        </div>
        <div style={styles.order_price_section}>
          <p>
            Заполните и отправьте форму. В ближайшее время наши менеджеры
            свяжутся с Вами.{" "}
          </p>
        </div>

        <div style={styles.container}>
          <form onSubmit={handleSubmit}>
            <input
              readOnly
              style={styles.input}
              value={props.selectItem ? props.selectItem.model : "load"}
            />
            <input
              placeholder="Имя"
              style={styles.input}
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Тел +7(000) 000 00 00"
              style={styles.input}
              name="tel"
              type="text"
              onChange={(e) => setTel(e.target.value)}
            />

            <Button
              variant="primary"
              style={styles.order_form_button}
              type="submit"
              onClick={()=>setShowConfirmOrderModal(true)}
            > 
              Отправить
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
     <ConfirmOrderModal
     showConfirmOrderModal={showConfirmOrderModal}
     setShowConfirmOrderModal={setShowConfirmOrderModal}
     />

    </>
  );
}
