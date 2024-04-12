// import { useState } from 'react';
// import { initial_PL } from './App';

// const productlist=[]
// export function Addproduct() {
//    const [productList, setProductList] = useState(initial_PL);

//   const new_obj = {
//     name: undefined,
//     poster: undefined,
//     price: undefined,
//     rating: undefined,
//     summary: undefined
//   };
//
//   return (
//     <div className="inputfield">
//       <input type='text' placeholder='name' onChange={(event) => (new_obj.name = event.target.value)}></input>
//       <input type='text' placeholder='poster' onChange={(event) => (new_obj.poster = event.target.value)}></input>
//       <input type='text' placeholder='price' onChange={(event) => (new_obj.price = event.target.value)}></input>
//       <input type='number' placeholder='rating' onChange={(event) => (new_obj.rating = event.target.value)}></input>
//       <input type='text' placeholder='summary' onChange={(event) => (new_obj.summary = event.target.value)}></input>
//       <button onClick={() => setProductList(...productList, new_obj)}> ADD Product</button>
//     </div>
//  );

// }

// export {productList};