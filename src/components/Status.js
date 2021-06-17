import "./status.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import droneImg from '../img/drone.png'

function Status() {
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
      <h1> Inga beställningar! </h1>
      </div>
    )
  }

}

export default Status;

