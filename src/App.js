import React,{useEffect} from 'react';
import Header from'./Header';
import Home from'./Home';
import Login from './Login';
import Payment from './Payment';
import Cheackout from'./Cheackout';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import {auth} from './firebase';
import {useStateValue} from "./StateProvider";
import reducer,{initialState} from"./reducer";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise =loadStripe("pk_test_51L1dX9JSKGmPp2IwxVSUtd9qRjmAmf0yFtJ2aHPbEuYVtmDEdrNwaUgjAkzlusMU1F3Yk3L3VdqUaFE6Gv8cbA2500DeyyZZ3C");


function Layout() {
  return (
    <div>
       <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}
function Loginf() {
  return (
    <div>
     <Login />
    </div>
  );
}

function Layout1() {
  return (
    <div>
       <Header />
      <main>
       <Cheackout />
      </main>
     
    </div>
  );
}
function Layout3() {
  return (
    <div>
       <Header />
      
      <main>
       <Elements stripe={promise} >

        <Payment />
       
       </Elements>
      </main>
     
    </div>
  );
}



function App() {
  const[{},dispatch]=useStateValue(reducer,initialState);
useEffect(()=>{
 auth.onAuthStateChanged(authUser=>{
console.log('the user is', authUser);

if(authUser){
dispatch({
type:'SET_USER',
user:authUser
})

} else{
  dispatch({
type:'SET_USER',
user:null

  })


}
 })



},[])

return( 
 <Router>
 <Routes>
<Route exact path="/login" element={<Loginf />} />

  <Route exact path="/" element={<Layout />} />
<Route exact path="/checkout" element={<Layout1 />} />
<Route exact path="/payment" element={<Layout3 />} />

     
        
        </Routes>



  

  </Router>
  );
}

export default App
