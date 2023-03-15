import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

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
      
        <div className="about_left">
          <div className="about_left_h1">
            <h1 className="about_h1">О НАС</h1>
          </div>

          <p>
            <b>Sup Guru</b> находится в Череповце и является официальным представителем
            компании Gladiator в России. Мы занимаемся продажей и прокатом
            сап-бордов с 2016 года. Имеем большой опыт в этой сфере и знаем как
            правильно выбрать сап. У нас вы можете получить профессиональную
            консультацию по подбору доски и купить фирменные SUP-борды с
            дилерской гарантией по самым доступным ценам. Предоставляем <b>бесплатный тест-драйв</b> (10 мин.) перед покупкой, чтобы Вы на 100%
            были уверенны в выборе. Возможна доставка товара на дом или
            самовывоз со склада в Череповце. С нами просто, удобно и выгодно.
          </p>
          
          <Button className="about_button">В каталог</Button>
        </div>
      </Col>
      <Col className="display-flex-right">
        
        <div className="about_left">
          <div className="about_left_h1">
            <h1 className="about_h1">САП ПРОКАТ</h1>
          </div>

          <p>
            Если Вы хотите покататься на сапах или протестировать интересующую
            Вас модель доски, то приезжайте к нам на прокат. Мы находимся на
            Чёрной Речке. <b>Бесплатные плюшки от Sup Guru:</b>    
            <br/><ul>
              <li>тест-драйв (10 минут)
            при покупке доски </li>
              <li>вводный инструктаж и обучение</li>
              <li>по желанию
            выдаём спасательные жилеты и гермопакеты для личных вещей</li>
            </ul><p><b>Внимание!</b> Предварительная запись на прокат обязательна! <br/>Телефон/WhatsApp/Telegram: +79115175912 или +79115062870</p>
          </p>
          <Button className="about_button">Записаться</Button>
          <Button>Как проехать</Button>
        </div>
      </Col>
    </Row>
  );
}
