import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../themeSlice';
import { increment, decrement } from '../CounterSlice';

function ColorSelector() {
  const [color, setColor] = useState('black');
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.counter
  })


  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => dispatch(changeColor({ color }))}>
        Change Color
      </button>
      <p>{value}</p>
      <button onClick={() => { dispatch(increment()) }}>Increment</button>
      <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
    </div>
  );
}

export default ColorSelector;
