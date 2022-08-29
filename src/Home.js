import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
 return( 
  <div className="home"> 
<div className="home_container">
<img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
 <div className="home-row">
<Product id="1223" title="the lean startup" price={9.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />

<Product id="1224" title="random title two" price={11.99} image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/periodicals/magazines/May2021/TWP/TWP_Desktop_Cat_Card_379x304._SY304_CB668745650_.jpg" rating={2} />


</div>
<div className="home-row">
<Product id="1225" title="random title 3" price={11.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DCC/GW_D_CatCard_AF_MAY_PROM_ALL_1x._SY304_CB624709114_.jpg" rating={2} />
<Product id="1226" title="random title 4" price={15.99} image="https://m.media-amazon.com/images/I/71LQONQhUhL._AC_SY200_.jpg" rating={12} />
<Product id="1227" title="random title 5" price={17.99} image="https://m.media-amazon.com/images/I/71OW3NS4f6S._AC_SY200_.jpg" rating={4} />


</div>
<div className="home-row">
<Product id="1228" title="random title final" price={1.99} image="https://m.media-amazon.com/images/I/71-N0PxSwJL._AC_SY195_.jpg" rating={2} />


</div>

</div>
</div>
  );
}

export default Home
