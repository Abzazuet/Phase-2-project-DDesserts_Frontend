
import TopNavbar from "./TopNavbar";
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    document.title = "Daniela's Desserts";
  }, [])
  return (
    <div className="App">
      <TopNavbar />

    </div>
  );
}

export default App;
