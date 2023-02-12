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
            </Carousel>
          </Col>

          <Col className="bottom_line">
           

            <ul className="itemInModal_ul">
            <li><h1>{props.selectItem ? props.selectItem.model : "Load"}</h1></li>
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
                <Button onClick={() => props.setShowOrderPage(true)}>Оформить Заказ</Button>
              </li>
            </ul>
          </Col>
        </Row>
        <div>
          <h3 className="itemInModal_li_h3">Подробное описание:</h3>
          Сап доска Gladiator Kids 9.6 - это детская двухслойная прогулочная
          модель, которая идеально подходит как детям, так и райдерам весом до
          70 кг. Очень проста в управлении: форма спроектирована таким образом,
          чтобы придать устойчивость и манёвренность. На доске удобно совершать
          прогулки и небольшие путешествия, загорать или просто купаться.
          Рабочая поверхность модели покрыта мягким EVA ковриком для лучшей
          устойчивости на доске. По центру, в носовой части и хвосте находятся
          мягкие ручки для удобной транспортировки. На борту имеется система
          креплений "карго", которая надёжно держит ваши личные вещи во время
          катания.
          <br />
          Модель создана с применением новейших технологий: - технология MSL
          Fusion - спайка между собой двух слоёв прочного ПВХ материала, который
          устойчив к различным механическим повреждениям - технология Xstrong
          Edge придаёт канту превосходную жёсткость, благодаря чему сап обладает
          свойствами ‘’литой доски’’ сохраняя форму под весом райдера.
          <h3 className="itemInModal_li_h3">Комплектация:</h3>
          Доска, насос с манометром, сумка-рюкзак, весло (нейллон/фибергласс),
          ремкомплект, лиш витой, плавник. Комплект содержит всё необходимое для
          катания, приобретать дополнительно ничего не нужно.
        </div>
      </Container>
    </>
  );
}
