import { getOrders } from './api'
import { useEffect, React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.currentUserReducer.currentUser)

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const orderData = await getOrders(user.id);
      console.log("orderData:", orderData)
      setOrders(orderData)
    }
    fetchData();

  }, [user.id])


  const renderOrder = orders.map((order) => {
   

    return (

              <li key={order.id}>{order.id}</li>

    
    );
  })
  return (

    <div className="orderhistorik">
    <h2>Orderhistorik</h2>

     {renderOrder}  
    </div>

  
  );  
}
 

export default Profile
