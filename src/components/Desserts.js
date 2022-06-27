import { useEffect, useState } from "react";
import Dessert from "./Dessert";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Desserts() {
    const [desserts, setDesserts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/desserts')
            .then(res => res.json())
            .then(data => setDesserts(data))
    }, [])
    return (
        <Container>
            <Row>
            {desserts.map(dessert => <Dessert key={dessert.id} dessert={dessert} />)}
            </Row>
            
        </Container>
    )
}
export default Desserts;
