import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

export function Header(props) {
  return (<>
    <div id="header">
      <Container>
        <div id="header_brand">SUPGURU</div>
        <div id="header_text">
          <ul>
            <li id="header-text-item">
              Продажа и прокат Сап-бордов в Череповце
            </li>
            <li id="header-text-item"> Бесплатный тест-драйв перед покупкой</li>

            <li id="header-text-item">Самые доступные цены</li>
            <li id="header-text-item">
              Доставка товара по городу и в регионы РФ
            </li>
            
          </ul>
          <ul>
          <li className="header_button"><Button variant="light" >Записаться на тест-драйв</Button></li>
          <li className="header_button"><Button variant="warning" onClick={() => props.setShowHowCooseSupModal(true)}>Как правильно выбрать САП</Button></li>
          </ul>
        </div>
        
      </Container>
      
    </div>
    
    </>);
}
