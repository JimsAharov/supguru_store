import Container from "react-bootstrap/Container";

export function Header(){
    return(
        <div id="header">
            <Container>
            <div id="header_brand">
                SUPGURU
            </div>
            <div id="header_text">
                 <ul>
                    <li id="header-text-item">Склад Сап-бордов в Череповце</li>
                    <li id="header-text-item">Самые доступные цены</li>
                    <li id="header-text-item">Доставка товара по городу и в регионы РФ</li>
                    <li id="header-text-item">Тест-драйв перед покупкой</li>
                    <li id="header-text-item">Действующий прока на Черной речке</li>
                 </ul>
            </div>
            </Container>
            
        {/* <img src="Безымянный-11 прозрачный фон 1.png"/> */}
        </div>
    
           
            
        
    )

}