import React from 'react'
 import { useSelector } from "react-redux";

function Header() {
   

      const cart = useSelector((state) => state.addProduct.items);


    return (
  
    <div>
            <h1> Shopping Cart: {cart.length} items</h1>
    </div>
  );
}

export default Header;
