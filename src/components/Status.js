import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'
import './status.css'

function Status() {

  const order = useSelector(state => state.order.orders)
  const eta = order.eta
  const id = order.id

  return (

      <div className="content" >
        <p className="number"> Ordernummer: <strong> {id} </strong></p>

        <h1>{ order.id ? "Din beställning är på väg!" : " Du har inga beställningar just nu"}</h1>
        <h3 className="mins" > <strong> {eta} </strong> </h3>
      <button className="okBtn"><Link  to="/status">Ok, cool!</Link></button>
    
    </div>
  );
};


export default Status