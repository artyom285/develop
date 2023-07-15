import React from 'react';
import "./Bottom.css";
import { BiDownArrowCircle } from "react-icons/bi";

function Bottom() {
  return (
    <div className='Bottom'>
      <i><BiDownArrowCircle /></i>
      <span>Scroll down</span>
    </div>
  )
}

export default Bottom