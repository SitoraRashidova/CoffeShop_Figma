import "./App.css";
import DiscowerCoffee from "./components/discover-coffee";
import Header from "./components/header";
import Hero from "./components/hero";
import TypeCofee from "./components/type-coffee";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TypeCofee />
      <DiscoverCoffee/>
    </>
  );
}

export default App;
