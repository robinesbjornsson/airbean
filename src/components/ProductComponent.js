import React from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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
      <div className="" key={id}>

          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <button onClick={() => handleClick()}> + </button>
                <div className="header"> {title} </div>
                <div className="meta price"> $ {price} </div>
              </div>
            </div>
          </div>

      </div>
    );
  });


    return (
        <div>{renderList} </div>
    )
}

export default ProductComponent;
