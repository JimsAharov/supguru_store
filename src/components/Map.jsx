import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Map() {
  return (
    <Row className="map" xs={1} md={2}>
      <Col className="display-flex-left">
        <div className="about_left">
          <div className="about_left_h1">
            <h1 className="about_h1">Как добраться <br /> на прокат</h1>
          </div>
          <br /> <br />
          <p>
            Мы находимся на Чёрной Речке со стороны д.Костяевка не доезжая
            железного моста 200 метров поверните направо. На берегу установлен
            оранжевый флаг Sup Guru.
            <br /> <br /> <br />
            <b>Внимание!</b> Предварительная запись на прокат обязательна.{" "}
            <br />
            Телефон / WhatsApp / Telegram: <br /> +79115175912 +79115062870
          </p>
        </div>
      </Col>
      <Col>
        <div id="map">
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abeae64143ea14f871033427fd948ef79771ea4e0e677a063ec5d1298e69b5fe6&amp;source=constructor"
            width="700"
            height="530"
            frameborder="0"
          ></iframe>
        </div>
      </Col>
    </Row>
  );
}
