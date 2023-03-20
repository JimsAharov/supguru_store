import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

export function ItemInModal(props) {
  return (
    <>
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    props.selectItem ? props.selectItem.gallery_image1 : "Load"
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    props.selectItem ? props.selectItem.gallery_image2 : "Load"
                  }
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    props.selectItem ? props.selectItem.gallery_image3 : "Load"
                  }
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    props.selectItem ? props.selectItem.gallery_image4 : "Load"
                  }
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col className="bottom_line">
            <ul className="itemInModal_ul">
              <li>
                <h1>{props.selectItem ? props.selectItem.model : "Load"}</h1>
              </li>
              <li>
                <h3 className="itemInModal_li_h3">Характеристики:</h3>
              </li>
              {props.selectItem
                ? props.selectItem.characteristics.map((el, i) => <li>{el}</li>)
                : "Loading"}
              <li className="itemInModal_price_li">
                <span>
                  {props.selectItem ? props.selectItem.price : "Load"}
                </span>
                <span className="oldprice">
                  {props.selectItem ? props.selectItem.oldprice : "Load"}
                </span>
              </li>
              <li className="itemInModal_orderButton">
              
                  <Button
                    onClick={() => {
                      props.setShowOrderPage(true);
                      props.setShowModal(false);
                    }}
                  >
                    Оформить Заказ
                  </Button>
                
                
              </li>
            </ul>
          </Col>
        </Row> <Container><div>
          <h3 className="itemInModal_li_h3">Подробное описание:</h3>
          {props.selectItem ? props.selectItem.description : "Load"}
          <h3 className="itemInModal_li_h3">Комплектация:</h3>
          {props.selectItem ? props.selectItem.equipment : "load"}
          <h3 className="itemInModal_li_h3">Оплата и доставка</h3>
          Оформить заказ можно несколькими способами:
        <ul>
          <li>Через каталог нашего сайта</li>
          <li>
            По номеру +79115175912 / +79115062870 (доступны в WhatsApp и
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
        </div></Container>
        
      </Container>
    </>
  );
}
