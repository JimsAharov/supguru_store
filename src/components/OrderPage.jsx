import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from "react-bootstrap";

const styles = {
  container: {
    width: "100%",
    margin: "0 auto",
    padding: "0px 30px"
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
  order_p:{
    marginBottom: "2px",
    fontWeight: "bold",
  },
  order_description_text:{
    marginLeft: "40px",
  },
  order_price_section:{
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px 30px",
  }
};

export function OrderPage(props) {
  return (
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
            <p style={styles.order_p}> {props.selectItem ? props.selectItem.model : "load"}</p>
            <ul>
              <li>{props.selectItem ? props.selectItem.param1 : "load"}</li>
              <li>{props.selectItem ? props.selectItem.param2 : "load"}</li>
              <li>{props.selectItem ? props.selectItem.size : "load"}</li>
            </ul>
          </div>
          <div>
            
          </div>
        </div>
        <div style={styles.order_price_section}>
        <span>Сумма заказа:</span> <span  style={styles.order_p}> {props.selectItem ? props.selectItem.price : "load"}</span>
        </div>
        <div style={styles.order_price_section}><p>Заполните и отправьте форму. В ближайшее время наши менеджеры свяжутся с Вами. </p></div>
        
        <div style={styles.container}>
          <form>
            <input placeholder="Имя" style={styles.input} value={props.selectItem ? props.selectItem.model : "load"} />
            <input placeholder="E-mail" style={styles.input} />
            <input placeholder="Тел +7(000) 000 00 00" style={styles.input} />
            
            <Button variant="warning"  style={styles.order_form_button} type="submit">
              Отправить
            </Button>
          </form>
        </div>
        
      </Modal.Body>
    </Modal>
  );
}
