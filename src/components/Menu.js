import { useState } from 'react';
import Hamburger from 'hamburger-react'
import { Link, } from 'react-router-dom';
import { useSelector , useDispatch} from "react-redux";
import Cart from './Cart'
import './menu.css'
import { openCart } from "../redux/actions"

import headerImg from '../img/header.png'
import bag from '../img/bag.svg'

export default function Menu() {
    const amount = useSelector((state) => state.addProduct.items.length)
    const open = useSelector((state) => state.open.open)
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch();
  
    

    const handleOpen = () => {
        setOpen(!isOpen);
    }

    const closeMenu = () => {
        setOpen(false)
    }
 
    return (
        <div className="navBar">
            {/* <img className="headerImg" src={headerImg} alt="header" /> */}
            <div className="buttons">
                <div className="hamburger" >
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        onClick={handleOpen}
                        size={24}
                        rounded
                        distance="lg"
                    />
                </div>
            
            </div>

            <div id="mobile-links" >
                <ul className={` menuNav ${isOpen ? "showMenu" : ""}`}>
                    <li>
                        <Link onClick={() => closeMenu()} to="/">Meny </Link>
                    </li>
                    <div id="menu-line"></div>
                    <li>
                        <Link onClick={() => closeMenu()} to="/about">Vårt kaffe </Link>
                    </li>
                    <div id="menu-line"></div>
                    <li>
                        <Link onClick={() => closeMenu()} to="/profile">Min profil </Link>
                    </li>
                    <div id="menu-line"></div>
                    <li>
                        <Link onClick={() => closeMenu()} to="/status">Orderstatus </Link>
                    </li>
                </ul>
            </div>
            {/* <div className={` cart-container ${isCartOpen ? "showCart" : ""}`}>
                    <Cart/>
            </div>  */}

        </div>

    )
}