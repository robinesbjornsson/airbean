/*
import React from 'react'
import { logoutAction,  } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


const Logout = () => {

    const user = useSelector((state) => state.user.users);

  const dispatch = useDispatch()

     const handleLogout = (e) => {



        e.preventDefault();

        dispatch(logoutAction())
        console.log(user)

     }

    return (
        <div>
            <h1> Welcome {user.name} </h1>

            <button className="logout_button" onClick={(e) => handleLogout(e)}> logout </button>
        </div>
    )
}

export default Logout
*/