import "./ProductList.css"
import React from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import { addProduct } from "../redux/actions";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  const cart = useSelector((state) => state.addProduct.items);
  const dispatch = useDispatch(); 

  const renderList = products.map((product) => {
      const { id, title, desc, price } = product;
      
    const handleClick = () =>  {

      console.log("adding to cart:", cart.length)
    

      dispatch(addProduct(product))

      }
    return (
      <div key={id} className="card" >
          <button className="add_btn" onClick={() => handleClick()}> + </button>
          <div className="header"> <h2> {title} ... $ {price}  </h2> </div>
          <div className="desc"> <p> {desc} </p> </div>
      </div>
    );
  });


    return (
        <div className="card_container">
        {renderList} 
        </div>
    )
}

export default ProductComponent;
