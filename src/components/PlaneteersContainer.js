import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers }) {
  return (
    <ul className="cards">
      {planeteers.map((key) => (
        <Planeteer key={key.id} planeteer={key} />
      ))}
    </ul>
  );
}

export default PlaneteersContainer;
