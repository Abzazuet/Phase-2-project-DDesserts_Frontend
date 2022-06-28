import TopNavbar from "./TopNavbar";
import Home from "./Home";
import Desserts from "./Desserts";
import AddDessert from "./AddDessert";
import Login from "./Login";

import AboutUs from "./AboutUs";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/App.css";

function App() {
  const [adminLogged, setAdminLogged] = useState(false);
  const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    fetch("https://immense-garden-31850.herokuapp.com/desserts")
      .then((res) => res.json())
      .then((data) => setDesserts(data));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar adminLogged={adminLogged} setAdminLogged={setAdminLogged} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route
            exact
            path="/desserts"
            element={<Desserts desserts={desserts} />}
          />
          <Route
            exact
            path="/login"
            element={
              <Login setLoggedIn={setAdminLogged} adminLogged={adminLogged} />
            }
          />
          <Route exact path="/addDessert" element={<AddDessert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
