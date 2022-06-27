import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function Login({ setLoggedIn, adminLogged }) {
  const [logData, setLogData] = useState({login:'', password: ''});

  function onChangeData(event) {
    setLogData({
      ...logData,
      [event.target.id]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (adminLogged) {
      setLoggedIn(!adminLogged);
      window.alert("Logged out");
      setLogData({
        login: "",
        password: "",
      });
    } else if (
      logData.login === "daniela" &&
      logData.password === "daniela97"
    ) {
      setLoggedIn(true);
      window.alert("Admin option enabled");
      setLogData({
        login: "",
        password: "",
      });
    } else {
      setLoggedIn(false);
      window.alert("Wrong username or password");
    }
  }
  return (
    <div className="background">
      <div className="phrase-container">
        <h1>Administrator login</h1>
      </div>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="login">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter login"
            onChange={onChangeData}
            value={logData.login}
          />
          <Form.Text className="text-muted">
            This form is used to validate Admin login and enable editing
            functions
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={onChangeData}
            value={logData.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {adminLogged ? "Log out" : "Log in"}
        </Button>
      </Form>
    </div>
  );
}
export default Login;
