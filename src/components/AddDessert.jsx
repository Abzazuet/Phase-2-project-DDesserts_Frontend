import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/AddDessert.css";
function AddDessert() {
  const [ingredients, setIngredients] = useState([]);
  const [changeIngredient, setChangeIngredient] = useState("");
  const [params, setParams] = useState({});
  const [regimes, setRegimes] = useState([]);
  function handleAdd(event) {
    setIngredients([...ingredients, changeIngredient]);
    setParams({
      ...params,
      ingredients: [...ingredients, changeIngredient],
    });
  }
  function handleChangeText(event) {
    setParams({
      ...params,
      [event.target.id]: event.target.value,
    });
  }
  function handleMacros(event) {
    setParams({
      ...params,
      macronutrients: {
        ...params.macronutrients,
        [event.target.id]: event.target.value,
      },
    });
  }
  function onChangeIngredient(event) {
    setChangeIngredient(event.target.value);
  }
  function handleCheckBox(event) {
    if (!regimes.includes(event.target.value)) {
      setRegimes([...regimes, event.target.value]);
      setParams({
        ...params,
        regimes: [...regimes, event.target.value],
      });
    } else {
      setRegimes(regimes.filter((regime) => regime !== event.target.value));
      setParams({
        ...params,
        regimes: regimes.filter((regime) => regime !== event.target.value),
      });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://immense-garden-31850.herokuapp.com/desserts", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response);
  }

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Dessert Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={handleChangeText}
        />
        <Form.Text className="text-muted">Only for admin</Form.Text>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="image"
        onChange={handleChangeText}
      >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ingredients">
        <Form.Label>Food ingredients:</Form.Label>
        {ingredients.map((ingredient) => (
          <span className="text-muted" key={ingredient}>
            {" "}
            {ingredient}{" "}
          </span>
        ))}
        <Form.Control
          type="text"
          placeholder="Ingredient"
          onChange={onChangeIngredient}
        />
        <Button
          variant="primary"
          type="button"
          className="mt-3"
          onClick={handleAdd}
        >
          Add
        </Button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRegime">
        <Form.Label>Food regimes</Form.Label>
        <Form.Check
          type="checkbox"
          label="Sugar free"
          onClick={handleCheckBox}
          value="sugar free"
        />
        <Form.Check
          type="checkbox"
          label="Paleo"
          onClick={handleCheckBox}
          value="paleo"
        />
        <Form.Check
          type="checkbox"
          label="Keto"
          onClick={handleCheckBox}
          value="keto"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="carbohydrates">
        <Form.Label>Carbohydrates</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter grams"
          onChange={handleMacros}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="proteins">
        <Form.Label>Proteins</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter grams"
          onChange={handleMacros}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="fats">
        <Form.Label>Fats</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter grams"
          onChange={handleMacros}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default AddDessert;
