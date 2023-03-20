import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



export  function Catalog(props) {
  
  
  return (
    <Container id="catalogGladiator">
      <Row xs={2} md={4}>
        {props.data
          ? props.data.map((g, i) => (
              <Col>
                <Card className="catalog_card" onClick={() => {props.setShowModal(true); props.setSelectItem(g) }} key={`${g.model}`} >
                  <Card.Img variant="top" src={g.image} />
                  <Card.Body>
                    <Card.Title>{g.model}</Card.Title>
                    <Card.Text><ul>
                      <li>{g.param1}</li>
                      <li>{g.param2}</li>
                      <li>{g.size}</li>
                      </ul></Card.Text>
                    <Card.Title variant="light"><span>{g.price}</span><span className="oldprice">{g.oldprice}</span></Card.Title>
                    <Button  variant="primary" onClick={() => {props.setShowModal(true); props.setSelectItem(g) }}>Подробнее</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : "loading"}
          
      </Row>
    </Container>
  );
}
