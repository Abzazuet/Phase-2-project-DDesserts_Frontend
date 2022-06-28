import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
function AdminOptions({ setExpanded }) {
  return (
    <NavDropdown title="Admin options" id="basic-nav-dropdown">
      <LinkContainer to="/addDessert">
        <NavDropdown.Item href="#addDessert" onClick={() => setExpanded(false)}>
          Add Dessert
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/deleteDessert">
        <NavDropdown.Item
          href="#deleteDessert"
          onClick={() => setExpanded(false)}
        >
          Delete Dessert
        </NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/updateDessert">
        <NavDropdown.Item
          href="#updateDessert"
          onClick={() => setExpanded(false)}
        >
          Update Dessert
        </NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  );
}
export default AdminOptions;
