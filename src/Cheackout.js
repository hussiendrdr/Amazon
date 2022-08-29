import React from 'react';
import './cheackout.css';
import Subtotal from'./Subtotal'
import reducer,{initialState,getBasketTotal} from"./reducer";
import {useStateValue} from "./StateProvider";
import CheackoutProduct from'./CheackoutProduct'

function Cheackout() {
	const[{basket,user},dispatch]= useStateValue(reducer,initialState);

 return( <div className="cheackout">

<div className="cheackout_left">
<img className="cheackout_ad"
 src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
<div >
<h3>"hello",{user?.email}</h3>
<h2 className="cheackout_title">your shopping baskit</h2>

{basket.map(item=>(
<CheackoutProduct 
id={item.id}
image={item.image}
title={item.title}
price={item.price}
rating={item.rating}


 />
	) )}




</div>

</div>
<div className="cheackout_right">
<Subtotal />


</div>


</div>
   );
}

export default Cheackout
