import "./ProductList.css"
import { useState, useEffect, React } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";

import { setProducts } from "../redux/actions";

const ProductList = ({setColor}) =>  {


     
     const products = useSelector((state) => state.allProducts.products);
     const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5000/api/coffee/")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    setColor('#F3E4E1')
    fetchProducts();
  }, []);

  console.log("Products :", products);

  return (
    <div className="product-container">
      <ProductComponent />
    </div>
  );
}

export default ProductList;
