import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Map() {
  return (<Row xs={1} md={2}>
<Col></Col>
    <Col><div>
      <iframe
      title="map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae787bd5cbfc82facc29f66c57d0d39adfbee5bf959358c554664e479115eeb6&amp;source=constructor"
        width="100%"
        height="565"
        frameborder="0"
      ></iframe>
    </div></Col>

  </Row>
    
  );
}
