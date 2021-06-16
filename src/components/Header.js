import Menu from './Menu'
import Cart from './Cart'
import './header.css'

export default function Header() {
    return (
        <nav>
        <div className="menu">  <Menu/> </div>
        <div className="cart">  <Cart/></div>
        </nav>
    )
}