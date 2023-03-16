import React from "react";
import './Three.css';
import React, { useState } from "react";

export default function Three() {
  const [motivate, setWord] = useState([
    "Life Was Never Easy.", "Be Brave.", "Don't Give Up.", 
    "Eliminate Distractions.", "Stay Focused.", "You vs You."
  ]);
  let index = Math.floor(Math.random() * 5);
  return (
  <div className="rapper">
    <p>{motivate[index]}</p>
  </div>
  );
}