
import profileImg from '../img/Profile.png'
import { React } from "react";
import { useSelector, useDispatch } from "react-redux";

import {Order} from './Order';
import './Profile.css'
import { useHistory } from 'react-router-dom';


export const Profile = () =>  {
    const user = useSelector((state) => state.currentUserReducer.currentUser)
    const totalOrderSum = useSelector((state) => state.orderReducer.orderTotal)



        return (
            <div className="profile_wrapper"> 
            <div className="profile_container">
         
                    <img className="profileImg" src={profileImg} alt="" />
                    <h2> {user.userName} </h2>
                    </div>
                    <div className="order_history_container">
                        <h2>Orderhistorik</h2>
                        <div>
                            <Order />
                        </div>
                        <p className="total_sum">totalt spenderat: {totalOrderSum}</p>
                    </div>
           
         
            </div>
        );
      
    
}

