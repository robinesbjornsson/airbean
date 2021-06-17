import "./ProductList.css"
import Cart from './Cart'
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";
import AddBtn from './addButton.png'

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
      <div className="item" key={id}>

      <div className="item-content">
        <div>
          <a className="addBtn" onClick={handleClick}>
            <img class="button-img" src={AddBtn} alt="" />
          </a>
        </div>

        <div className="title-div">
          <h2 id="left" className="title"> {title} </h2>
          <p id="left" className="desc">{desc}</p>
        </div>
        <div className="price-div">
          <h2 className="price"> {price} kr</h2>
        </div>
      </div>

    </div>
    );
  });


    return (
      <div>
      <div>
      <div className="cart">  <Cart/> </div>
      </div>
        <div className="card_container">
        {renderList} 
        </div>
        </div>
    )
}

export default ProductComponent;
