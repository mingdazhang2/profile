
import React, { useState, useEffect, useMemo } from 'react';


export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(function () {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);
  return <p>and the counter counts {count}</p>;
}
