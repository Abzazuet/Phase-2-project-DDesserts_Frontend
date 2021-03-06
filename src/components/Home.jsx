import "../styles/Home.css";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="background">
      <div className="phrase-container">
        <h1>Daniela's Desserts</h1>
        <h2>
          We're a company dedicated to create desserts for people on different
          food regimes, such as vegan, keto, or just doing a diet but craving
          something sweet and tasty.
        </h2>
        <h1>Testimonials</h1>
        <Testimonials />
      </div>
      
    </div>
  );
}
export default Home;
