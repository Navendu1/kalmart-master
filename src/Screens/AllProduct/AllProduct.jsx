import React from "react";
import Hader from "../../MiniComp/Hader";
import ProductCardComp from "../../MiniComp/ProductCardComp";

import { useLocation } from "react-router-dom";


function AllProduct() {
  
  const{state}=useLocation()

  return (
    <div>
   <Hader/>
      <div className="product-card-container">
  
  {state && state.map((props)=>(
    <ProductCardComp key={props.id} data={props}/>

  ))}

     

       
      </div>
    </div>
  );
}

export default AllProduct;
