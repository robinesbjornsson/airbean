import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from "./components/Menu";
import Header from "./components/Header";
import Status from "./components/OrderStatus";
import {Profile} from "./components/Profile";
import OurCoffee from "./components/OurCoffee";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Products from "./components/ProductList";
import { useSelector } from "react-redux";
import { useState } from "react";


 const App = () => {

  const [color, setColor] = useState('#2F2926')  

  
  return (
    <div className="App" style={{backgroundColor:color}} >
 
 
      <BrowserRouter>
      <Header />

        <Switch>
          <Route exact path="/">
            <Products setColor={setColor}/>
          </Route>
          <Route path="/ourcoffee">
            <OurCoffee setColor={setColor}/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/status" >
            <Status />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App