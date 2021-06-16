import "./status.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Status() {
  const order = useSelector((state) => state.orderReducer.order);

  const lastItem = order[order.length - 1];

  console.log(lastItem.id);
  console.log(lastItem.eta);

  return (
    <div className="status">
      {lastItem.id}
      {lastItem.eta}
    </div>
  );
}

export default Status;
/*

    <div className="status-content" >
    <p className="number">Ordernummer <strong>{latestOrder.id}</strong></p>

    <h1>Din beställning är på väg!</h1>
    <h3 className="mins" > <strong>{latestOrder.eta}</strong> minuter</h3>
    <button className="status-button"><Link className="link" to="/menu">Ok, cool!</Link></button>
  </div>


*/
