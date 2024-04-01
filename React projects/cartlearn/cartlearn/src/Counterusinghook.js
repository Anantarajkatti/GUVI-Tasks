import React from 'react';
import { useState } from 'react';

export function Counterusinghook() {
  const [like, setLike] = useState(0);
  const[dislike,setDislike]=useState(0); //// now counter is initiated with value of 0....... usestate is like call back
  console.log(like); // here strict mode in index.js iscommented out     <-|
  return (<><div className="like">
    <button onClick={() => {
      // console.log(counter)//                          |
      setLike(like + 1); //                             |
     
      //                   // if any of the palce we use console.log it will show previous value so use it outside
    }}>👍like {like}</button>
  
    <button onClick={() => { setDislike(dislike+ 1); }}>👎dislike {dislike}</button>
  
    </div>
  </>
  );
}
