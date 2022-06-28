import { Form } from "react-bootstrap";
import "../styles/DisplayDessertsDropdown.css";
import { useState } from "react";
import FormDessert from "./FormDesserts";
function DisplayDessertsDropdown({ desserts }) {
  const [selectedDessert, setSelectedDessert] = useState([]);
  function handleDessert(event) {
    setSelectedDessert(
      desserts.filter((dessert) => dessert.name === event.target.value)
    );
  }
  return (
    <div>
      <Form.Select
        aria-label="Default select example"
        className="menu"
        size="lg"
        onChange={handleDessert}
      >
        <option>Select dessert</option>
        {desserts.map((dessert) => (
          <option key={dessert.id}>{dessert.name}</option>
        ))}
      </Form.Select>
      <FormDessert selectedDessert={selectedDessert} />
    </div>
  );
}
export default DisplayDessertsDropdown;
