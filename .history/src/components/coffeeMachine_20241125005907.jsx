import React from "react";
import "./CoffeeMachine.css";

const CoffeeMachine = () => {
  return (
    <section className="coffee-machine">
      <div className="container coffee-machine-wrapper">
        <img
          src="./assets/machine.png"
          alt="Coffee Machine"
          className="coffee-machine-image"
        />
        <div className="coffee-machine-content">
          <h3>Coffee Machine, Buy for Home</h3>
          <p>Get the best coffee machines to brew perfect coffee every time.</p>
          <button className="coffee-machine-btn">Discover Now</button>
        </div>
      </div>
    </section>
  );
};

export default CoffeeMachine;
