import { Addcolor } from './Addcolor';
import React, { useState } from 'react';

export function Inputtextcolor() {
  //const colorList= ["orange","green","blue"]
  const [color, setColor] = useState('');
  const [colorlist, setColorlist] = useState(["orange", "green", "blue"]);


  const style = {
    backgroundColor: color
  };
  return (
    <div className="main">
      <div>
        <input type='text' style={style} onChange={(event) => (setColor(event.target.value))}></input>
        <button onClick={() => setColorlist([...colorlist, color])}>add colour</button>
      </div>
      {colorlist.map((clr) => (<Addcolor color={clr} />))}

    </div>

  );
}
