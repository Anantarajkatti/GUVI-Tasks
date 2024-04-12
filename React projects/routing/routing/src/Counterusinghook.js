import React from 'react';
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export function Counterusinghook() {
  const [like, setLike] = useState(0);
  const[dislike,setDislike]=useState(0); //// now counter is initiated with value of 0....... usestate is like call back
  console.log(like); // here strict mode in index.js iscommented out     <-|
  return (
  <>
  <div className="like">
  <IconButton aria-label="likebtn" color="primary">
  <Badge badgeContent={like} color="success"  onClick={() => {setLike(like + 1);}}>
  👍
  </Badge>
  
</IconButton>

<IconButton aria-label="dislikebtn" color="primary">
  <Badge badgeContent={dislike} color="error"  onClick={() => {setDislike(dislike + 1);}}>
  👎
  </Badge>
  
</IconButton>
 


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