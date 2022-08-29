import React from 'react';
import './cheackoutproduct.css';
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import {useStateValue} from "./StateProvider";
import reducer,{initialState} from"./reducer";




function CheackoutProduct({id,image,title,price,rating}) {
const[{basket},dispatch]= useStateValue(reducer,initialState);


const removeFromBasket=()=>{
dispatch({
type:'REMOVE_FROM_BASKET',
id:id,

})



}

 return( 
 <div className=" cheackoutproduct">
<img className='cheackoutproduct_image' src={image} alt=""/>  
<div className='cheackoutcroduct_info'>
<p className='cheackoutproduct_title'>{title}</p>
<p className='cheackoutproduct_price'>
<small>$</small>
<strong>{price}</strong>
</p>
<div className="cheackoutproduct_rating">
{Array(rating).fill().map((_,i)=>(
<FaStar/>

	))}
</div>

<button onClick={removeFromBasket}>remove from the basket</button>
</div>

</div>
  );
}

export default  CheackoutProduct;