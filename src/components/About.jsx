import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  container_about: {
    margin: "auto",
    paddingTop: "10px",
  },
};

export function About() {
  return (
    <Row style={styles.container_about} xs={1} md={2}>
      <Col className="display-flex-left">
        <h1 className="about_h1">Про магазин</h1>

        <p>
          Sup Guru является официальным представителем компаний Gladiator,
          Iboard, FunWater в России. У нас вы можете купить оригинальные
          SUP-борды от проверенных производителей по доступным ценам. На каждую
          нашу доску мы предоставляем гарантию. Внимание - остерегайтесь
          подделок! Помогаем подобрать удобную для Вас модель. Возможен
          тест-драйв перед покупкой, чтобы Вы на 100% были уверенны в своём
          выборе. С нами просто, удобно и выгодно.
        </p>
      </Col>
      <Col className="display-flex-right">
        <h1 className="about_h1">Прокат</h1>
        <Container>
          <p>
            Если Вы хотите просто покататься или протестировать интересующую Вас
            модель доски, то приглашаем к нам на прокат, который находится на
            Чёрной Речке. Предварительная запись обязательна! Плюшки от Sup
            Guru:
            <ul>
              <li>фирменное оборудование </li>
              <li>вводный инструктаж и обучение</li>
              <li>бесплатно спасательные жилеты и гермопакеты</li>
            </ul>
          </p>
        </Container>
        
      </Col>
    </Row>
  );
}
