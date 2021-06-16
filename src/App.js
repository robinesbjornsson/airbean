import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from "./components/Menu";
import Header from "./components/Header";
import Status from "./components/Status";
import Profile from "./components/Profile";
import {About} from "./components/About";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Products from "./components/ProductList";

 const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/about">
            <About />
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