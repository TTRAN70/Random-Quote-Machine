import React from "react";
import "./style.css";
import Three from './Three';
import Quote from './Quote';
import ReactFCCtest from 'react-fcctest';

export default function App() {

  return (
    <div className="wrapper">
      <ReactFCCtest />
      <div className="three"> 
        <Three />
      </div>
      <div className="qte">
        <Quote />
      </div>
    </div>
  );
}
