import React,{useReducer} from 'react';
import './header.css';
import { FiSearch,FiGift } from "react-icons/fi";
import { AiFillShopping } from "react-icons/ai";
import {Link} from "react-router-dom"
import reducer,{initialState} from"./reducer";
import Product from'./Product'
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function Header() {

const[{basket,user},dispatch]= useStateValue(reducer,initialState);

const handelAuth=()=>{
if (user){
  auth.signOut();
}

}
return( 
  <div className="header">
  <Link to="/" >
  <img className ="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  />


  </Link>
  <div className="header_search">
  <input className="header_searchInput" type="text"/>
  <FiSearch className="header_searchIcons"/>
 
       {/*logo*/}
  </div>

<section className="header_nav">
<Link to={!user && '/login'}>

<div onClick={handelAuth}
 className="header_option">

<span className="header_optionLineOne">
Heloo,{!user ?'Guest':user.email}</span>
<span className="header_optionLineTow">
{user ? 'SignOut ': 'Sign In '}
</span>
</div>

</Link>


<div className="header_option">
<span className="header_optionLineOne">
Returns
</span>
<span className="header_optionLineTow">
&orders
</span>

</div>


<div className="header_option">
<span className="header_optionLineOne">
your
</span>
<span className="header_optionLineTow">
primes
</span>

</div>
<div className="header_optionBasket"> 
<Link to='/checkout'> 
  <AiFillShopping/> 

  </Link>
<span 
className="header_optionLineTow
 header_basketCount" >

{basket?.length}

</span>


 </div>
 </section>

  </div>

  );
}

export default Header
