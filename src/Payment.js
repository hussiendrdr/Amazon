import React,{useState,useEffect} from 'react';
import './payment.css';
import {useStateValue} from "./StateProvider";
import reducer,{initialState,getBasketTotal} from"./reducer";
import CheackoutProduct from'./CheackoutProduct'
import {Link} from "react-router-dom"
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from"react-currency-format";
import axios from "./axios";
import {useNavigate} from "react-router-dom";


function Payment() {   
	const history=useNavigate();

const[{basket,user},dispatch]= useStateValue(reducer,initialState);
const stripe=useStripe();
const elements = useElements();
const [error,setError]=useState(null);
const [processing,setProcessing]=useState("");
const [disabled,setDisabled]=useState(true);
const [succeeded,setSucceeded]=useState(false);
const [clientSecret,setClientSecret]=useState(true);

useEffect(()=>{

const getClientSecret = async ()=>{
const response = await axios({
	method:'post',
	url:`/payments/create?total=
	${getBasketTotal(basket) * 100}`
});

setClientSecret(response.data.clientSecret)
}
getClientSecret();
},[basket])

const handelSubmit= async event=>{
event.preventDefault();
setProcessing(true);

//const payload = await stripe 
const payload= await stripe.confirmCardPayment(clientSecret,{
	payment_method:{
		card:elements.getElement(CardElement)
	}
}).then((paymentIntent)=>{
 
setSucceeded(true);
setError(null);
setProcessing(false);

history('/orders')

})

}
const handelChange=event=>{

setDisabled(event.empty);
setError(event.error ? event.error.message:"");

}

 return(
  <div className="payment">
<div className="payment_container">
<h1>
checkout(<Link to="/checkout">{basket?.length}items</Link>)
</h1>
<div className="payment_section">
<div className="payment_title">
<h3>Delivery Address</h3>
</div>
<div className="payment_address">
<p>{user?.email}</p>
<p>123 react lane</p>
<p>Syria</p>
</div>
</div>

<div className="payment_section">
<div className="payment_title">
<h3>review item and delivery</h3>
</div>
<div className="payment_item">
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
<div className="payment_section">
<div className="payment_title">
<h3>payment method</h3>

</div>
<div className="payment_details">
{/* stripe payment */}
<form onSubmit={handelSubmit}>
<CardElement onChange={handelChange}/>
<div className="payment_priceContainer">

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
<button disabled={processing||disabled||succeeded}>
<span>{processing ? <p> Processing</p>:
"Buy Now"}
</span>
</button>

</div>
{error && <div>{error}</div>}
</form>

</div>


</div>


</div>

 	</div>
 	 )

}

export default Payment
