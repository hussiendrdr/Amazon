import React,{useReducer} from 'react';
import "./Product.css";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import reducer,{initialState} from"./reducer";
import {useStateValue} from "./StateProvider";
function Product({id,title,image,price,rating}) {
const[{basket},dispatch]= useStateValue(reducer,initialState);
const addToBasket=()=>{
dispatch({
type:'ADD_TO_BASKIT',
item:{
	id:id,title:title,image:image,price:price,rating:rating
}

})
};
 return( 
  <div className="product"> 
  <div className="product_info">
<p>{title}</p>
<p className="product_price">
<small>$</small>
<strong>{price}</strong>
</p>

<div className="product_rating">
{Array(rating).fill().map((_,i)=>(
<FaStar/>

	))}

</div>

  </div>
<img src={image} alt="" />
<button onClick={addToBasket}> Add to baskit</button>
  </div>
  );
}

export default Product
