import React from "react";

import { useNavigate } from "react-router-dom";


function ProductCardComp({ data }) {
  const {_id , name, price,  images} = data ||{}
  let navigate = useNavigate();

  return (
    <div className="product-card click" onClick={() => navigate(`/productDetails/${_id}`,{state:data})}>
      <img
        style={{ objectFit: "cover" }}
        className="product-image"
        src={images?.[0].url}
        alt="loading"
      />
      <div>
        <text className="product-name-style">
          {name}</text>
        <br />
        <text className="product-price-style">{`₹${price}`} </text>
      </div>
    </div>
  );
}

export default ProductCardComp;
