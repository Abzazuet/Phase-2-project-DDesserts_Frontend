import Dessert from "./Dessert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Desserts({desserts}) {

  return (
    <div className="background">
      <Container>
        <Row>
          {desserts.map((dessert) => (
            <Dessert key={dessert.id} dessert={dessert} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Desserts;
