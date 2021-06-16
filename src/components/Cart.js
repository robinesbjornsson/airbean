

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './cart.css'
import { openCart, resetCart } from "../redux/actions"
import { setOrder } from "../redux/actions"
import bag from '../img/bag.svg'
import { useHistory } from 'react-router-dom';


const Cart = () => {
    const cart = useSelector((state) => state.addProduct.items)
    const total = useSelector((state) => state.addProduct.total)
    const open = useSelector((state) => state.open.open)

    const amount = useSelector((state) => state.addProduct.items.length)
    const user = useSelector((state) => state.currentUserReducer.currentUser.id)
    const dispatch = useDispatch();
    console.log(open.state, "test")
    const history = useHistory()

    async function postOrder(data) {
        try {
          let response = await fetch('http://localhost:5000/api/order', {
            method: 'POST',
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          })
          return await response.json()
        } catch (error) {
          console.log(error)
        }
      }

    const handleCartOpen = () => {
        dispatch(openCart(open))
    }

    const handleClick = async () => {
        const account = await postOrder({ cart, user })
        console.log(account)
        history.push("/status")

        dispatch(setOrder(account))
        dispatch(resetCart())
     
    }


    const renderCartList = cart.map((cart) => {
        const { id, title, price } = cart;


        return (
            <div className="cart" key={id}>

                <div className="cart2">
                    <div className="cart-content">
                        <div className="cart-item">
                            <h3 className="title"> {title} </h3>
                            <h3 className="price"> {price} kr</h3>
                        </div>
                    </div>

                </div>
            </div>
        );
    });

    //className={` cart-container ${isOpen ? "showCart" : ""}`}
    return (
  
        
        <div className="cartContainer">
            <div className="buttonContainer">
                <button onClick={handleCartOpen} className="cartBtn" >
                    <span > {amount} </span>
                    <img className="img" src={bag} alt="" />
                </button>
            </div>
            <div className={` cart-card ${open ? "showCart" : "hideCart"}`}>
                <h1 className="cart-header" >Din beställning</h1>
                <div>{renderCartList}</div>
                <div className="cart-total">
                    <h3>Total</h3> <h3>{total}</h3>
                    <p>inkl moms + drönarleverans</p>
                </div>
                <button onClick={handleClick}>Take my money!</button>
            </div>
        </div>
    )
}


export default Cart;

/*
<div className="cartContainer">

        <button className="cartBtn">   <div className="cartNum">{cartNum} </div> icon </button>
         
        </div>*/