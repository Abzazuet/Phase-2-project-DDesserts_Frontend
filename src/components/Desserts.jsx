import { useEffect, useState } from "react";
import Dessert from "./Dessert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Desserts() {
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    fetch("https://immense-garden-31850.herokuapp.com/desserts")
      .then((res) => res.json())
      .then((data) => setDesserts(data));
  }, []);
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