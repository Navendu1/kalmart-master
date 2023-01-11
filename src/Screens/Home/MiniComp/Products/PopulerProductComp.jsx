import React from "react";
import { Color } from "../../../../Color";
import ProductCardComp from "../../../../MiniComp/ProductCardComp";

import "./product.css";

import { useNavigate } from "react-router-dom";

function PopulerProductComp({ data }) {
  let navigate = useNavigate();
  return (
    <>
      {/* heading section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <h2 className="populerProductText">Populer Products</h2>
        {/* on click to show all products */}

        <button
          style={{
            background: "transparent",
            borderWidth: '0px',
            color: Color.blue,
            fontSize: "15px",
            fontWeight: 'bold'
          }}
          className="texthh" onClick={() => navigate("/allProduct",{state:data})}>

          View All Products

        </button>
      </div>

      {/* .............show all populer products............ */}
      <div className="product-card-container">

        {data && data.map((props) => (
          <ProductCardComp key={props._id}
           data={props}  />

        ))}

      </div>
    </>
  );
}

export default PopulerProductComp;
