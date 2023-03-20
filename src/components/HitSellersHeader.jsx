import { Container } from "react-bootstrap";
import { Catalog } from "./Catalog";

export function HitSellersHeader(props) {
  return (
    <div id="hit_sell_container">
      <Container>
        <h1 className="hit_sellers_h1">ХИТЫ ПРОДАЖ</h1>
        <p className="hit_sell_text">
          Здесь мы собрали для вас модели сап-бордов, которые <br /> наиболее
          популярны у наших покупателей
        </p>
      </Container>
      <Catalog 
        data={props.data}
        setSelectItem={props.setSelectItem}
        setShowModal={props.setShowModal}
      />
    </div>
  );
}
