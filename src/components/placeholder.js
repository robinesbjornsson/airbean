import './Profile.css'
import { useEffect, React, useState } from "react";
import { useSelector } from "react-redux";




function OrderList() {
    const user = useSelector((state) => state.currentUserReducer.currentUser)
    const [orders, setOrders] = useState([]);
    const userId = user.id

    async function getOrders (userId) {

              const response = await fetch(`http://localhost:5000/api/order/${userId}`)
              return await response.json()
        
          
    
    }

    async function fetchData() {
        
        const orderData = await getOrders(user.id);
        console.log("orderData:", orderData)
        setOrders(orderData)
    }

    useEffect(() => {
      
        fetchData();

    }, [user.id])

    const renderOrder = orders.map((order) => {

        return (
            <div>
                <li>{order.id}</li>
                <li>{order.total}</li>
                <li>{order.date}</li>
            </div>
        );
    })

    if (orders.length > 0) {
        return (
            <div className="orderhistorik">
                <ul>
                    {renderOrder}

                </ul>
            </div>
        );
    } else {
        return (
            <div className="orderhistorik">
                <h3>Inga beställningar lagda</h3>
            </div>
        );
    }

}

export default OrderList