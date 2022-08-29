import React from 'react';
import './subtotal.css';
import CurrencyFormat from"react-currency-format";
import {useStateValue} from "./StateProvider";
import reducer,{initialState,getBasketTotal} from"./reducer";
import {useNavigate} from "react-router-dom";



function Subtotal() {
const history=useNavigate();
const[{basket},dispatch]= useStateValue(reducer,initialState);


 return( <div className="subtotal">
<CurrencyFormat
renderText={(value)=>(
<>
<p>
subtotal ({basket?.length}):<strong>{value}</strong>
</p>
<small className="subtotal_gift">
<input type="checkbox"/> this order containes a subtotal gift
</small>
</>

	)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
perfix={"$"}
 
 />
<button onClick={(e)=>history('/payment')}>procced to Cheackout </button>
</div>
   );
}

export default Subtotal
