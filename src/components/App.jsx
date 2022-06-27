import TopNavbar from "./TopNavbar";
import Home from "./Home";
import Desserts from "./Desserts";
import AddDessert from "./AddDessert";
import AboutUs from "./AboutUs";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/desserts" element={<Desserts />} />
          <Route exact path="/addDessert" element={<AddDessert />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
