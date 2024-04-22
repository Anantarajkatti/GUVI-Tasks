import { useParams } from 'react-router-dom';

export function Productdetails({productList}) {
  const { productId } = useParams();
  //use params is used to utilise the content of url which is navigated
  // for example we used (InfoIcon  color="primary" onClick={()=>navigate(`/product/${id}`)}></InfoIcon> )..... in product.js .... 
  //here useParams is used utilize id of product
  return (<>
    <h1>Product detail page- {productId} </h1>
    <h2> {productList[productId].name}</h2>

  </>
  );
}
