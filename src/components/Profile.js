
import { useEffect, React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.currentUserReducer.currentUser)
  const [orders, setOrders] = useState([]);


  useEffect(() => {
  

    async function fetchData() {
        async function getOrders(accountId) {
      try {
        const response = await fetch(`http://localhost:5000/api/order/${accountId}`)
        return await response.json()
      } catch (error) {
        console.log(error)
      }
    }
      const orderData = await getOrders(user.id);
      console.log(orderData)
      setOrders(orderData)
    }
    fetchData();

  }, [user.id])
  //map orders to component list (31)
  return (
    <div className="profile">
      <div className="profile-content">
    
        <h2> {user.userName} </h2>
        <div className="orderhistorik">
          <h2>Orderhistorik</h2>

        </div>
      </div>
    </div>
  );
};


export default Profile