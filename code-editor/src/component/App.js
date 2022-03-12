import React from "react";
import SlotM from "./SlotM";

function App() {
  return (
    <>
      <h1 className="heading-style">
        Welcome to{" "}
        <span style={{ color: "blue", fontWeight: "bold" }}>
          Slot Machine Game
        </span>
      </h1>
      <SlotM x="yes" y="yes" z="yes" />
      <SlotM x="yes" y="no" z="yes" />
      <SlotM x="yeso" y="yeso" z="yeso" />
    </>
  );
}

export default App;
