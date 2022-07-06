
import React, { useState, useEffect } from 'react';
import useBoolean from './useBoolean.js'

export default function Toogler() {
    // const [isToggle, setToggle] = useState(false);

    // const handleToggle = () => setToggle(!isToggle);
    // const handleTrue = () => setToggle(true);
    // const handleFalse = () => setToggle(false);
  
    const [isToggle, {
      setToggle,
      setTrue,
      setFalse,
    }] = useBoolean(false);


    return (
      <div>
        {/* <button type="button" onClick={handleToggle}>
          Toggle
        </button>
        <button type="button" onClick={handleTrue}>
          To True
        </button>
        <button type="button" onClick={handleFalse}>
          To False
        </button> */}
    <button type="button" onClick={setToggle}>
        Toggle
      </button>
      <button type="button" onClick={setTrue}>
        To True
      </button>
      <button type="button" onClick={setFalse}>
        To False
      </button>
        {isToggle.toString()}
      </div>
    );
}