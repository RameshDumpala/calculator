import React from "react";
import "./keypad.css";
import { FaBackspace } from "react-icons/fa";

const Keypad = ({ handlechange, handleclear, calculator, backbutton }) => {
  return (
    <div>
      <div>
        <button className="numbers" onClick={() => handleclear("")}> c </button>
        <button className="numbers" onClick={() => calculator()}> = </button>
        <button className="numbers" onClick={() => backbutton()}> <FaBackspace /> </button>
        <button className="operator"  onClick={() => {handlechange("%"); }}>  % </button>
      </div>
      <div>
        <button className="numbers" onClick={() => {handlechange("7");}} > 7 </button>
        <button className="numbers" onClick={() => {handlechange("8"); }} > 8 </button>
        <button className="numbers" onClick={() => {handlechange("9"); }} > 9 </button>
        <button className="operator"onClick={() => { handlechange("/")}} > / </button>
      </div>
      <div>
        <button className="numbers" onClick={() => {handlechange("4"); }}> 4 </button>
        <button className="numbers" onClick={() =>{handlechange("5")}}> 5 </button>
        <button className="numbers" onClick={() => {handlechange("6") }}> 6 </button>
        <button className="operator" onClick={() => {handlechange("*") }}> * </button>
      </div>
      <div>
        <button className="numbers" onClick={() => {handlechange("1") }}> 1 </button>
        <button className="numbers" onClick={() => { handlechange("2") }}> 2 </button>
        <button className="numbers"  onClick={() => { handlechange("3")}}> 3 </button>
        <button   className="operator" onClick={() => {handlechange("-")}}> -  </button>
      </div>
      <div>
        <button className="numbers"  onClick={() => {handlechange("00") }}> 00 </button>
        <button className="numbers"  onClick={() => {handlechange("0")}}> 0 </button>
        <button  className="numbers" onClick={() => {handlechange(".")}}> .</button>
        <button
          className="operator"onClick={() => { handlechange("+") }}>+ </button>
      </div>
    </div>
  );
};

export default Keypad;
