import { useState } from 'react';
import { Counterusinghook } from './Counterusinghook';
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';


export function Product({ product ,id}) {

  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState(false);
 
   const navigate=useNavigate()

  const ratingStyle = {
    color: product.rating >= 4.5 ? 'green' : 'red',
    fontSize: '25px'
  };

  const summaryStyle = {
    display: show ? 'none' : 'block' // conditional styling
  };
  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} alt=""></img>
      <div className='product-spec'>
        <h4 className="product-name">{product.name}----{id}</h4>
        <p style={ratingStyle} className="star">⭐{product.rating}</p>
      </div>
      <IconButton aria-label="toggle_dsc_btn" color="primary" onClick={() => setShow(!show)}>
     {show?<ExpandMoreIcon/>:< ExpandLessIcon/> }
     </IconButton>
      <button onClick={() => setShow(!show)}>toggle description</button>


      <button onClick={()=>navigate("/color")}>navigate to color</button> 
      <InfoIcon  color="primary" onClick={()=>navigate(`/product/${id}`)}></InfoIcon>
      <button onClick={()=>navigate(`/product/${id}`)}>product</button>


      <p style={summaryStyle} className="product-summary">{product.summary}</p>

      <div className="product-spec">


        <h6>{product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h6>
        <button>Add To Cart</button>
        <Button variant="contained">MUI Add cart</Button>
      </div>
      <Counterusinghook />
      <button onClick={(() => setClicked(!clicked))}>conditional rendering</button>
      {clicked ? <p> this is conditional rendering</p> : null}
    </div>);


}
