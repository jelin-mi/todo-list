import React, { useEffect, useState } from 'react';
import Summary from './Summary';

function Timer() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // efecto que solo se ejecuta una vez porque el array de dependecias esta vacio []
  useEffect(() => {
    // console.log('useEffect 1render');
    const id = setInterval(() => {
      setCount(prevCount => {
        // console.log('prevCount', prevCount);
        return prevCount + 1;
      });
      // setCount(count + 1);
    }, 1000);

    return () => {
      // console.log('useEffect 1render clenup');
      clearInterval(id);
    };
  }, []);

  // efecto que se ejecuta cada vez que cambia count2 []
  useEffect(() => {
    console.log('useEffect title');
    document.title = count2;
    return () => {
      console.log('useEffect title clenup');
    };
  }, [count2]);

  const handleIncrement = () => {
    setCount2(count2 + 1);
  };

  console.log('render');
  return (
    <div className="Timer">
      <h2>Timer: {count}</h2>
      <h2>Count: {count2}</h2>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}

export default Timer;
