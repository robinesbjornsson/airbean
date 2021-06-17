import "./status.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import droneImg from '../img/drone.png'
import { useHistory } from 'react-router-dom';

export const OrderStatus = () => {
  const history = useHistory()
  const order = useSelector((state) => state.orderReducer.order);

  const lastItem = order[order.length - 1];


  if (lastItem) {
    return (

  
      <div className="status">
  
  
     
     
      <p className="number">Ordernummer <span className="orderNumberSpan"> <strong>{lastItem.id}</strong> </span></p>
  

      <img src={droneImg} alt="drone"></img>
      <h1>Din beställning är på väg!</h1>
      <h3 className="mins" > <strong>{lastItem.eta}</strong> minuter</h3>
      <button className="ok-button"><Link className="link" to="/menu">Ok, cool!</Link></button>

  

      </div>
    );
  } else {
    return (
      <div>
      <div className="empty_state_container">
      <h1> Du har inte gjort någon beställning. </h1>
       <button onClick={() => { history.push("/")}}> Ta mig till kaffemenyn! </button>
      </div>
   
      </div>
    )
  }

}

export default OrderStatus;

