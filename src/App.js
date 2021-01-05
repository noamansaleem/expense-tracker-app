import React, { useState } from 'react';
import Parent from './Parent.js';

function App() {
  let [number, setnum] = useState(34);
  return (
    <div>
      Hello World!
      <Parent num={number} />
      <button onClick={() => { setnum(++number) }}>Update Number!</button>
    </div>
  );
}

export default App;
