
import React, { useState } from 'react'
// import { thisUser, setUsers} from "../redux/actions";
import { setUser } from "../redux/actions";
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom';
import  './login.css'

const Login = (props )=> {

const [userName, setUsername] = useState('')
const [password, setPassword] = useState('')
  
const dispatch = useDispatch()
//const history = useHistory()


const submit = async (e, { userName, password}) => {
  e.preventDefault();
  
  let error = {}
  let isError = false //todo: handle seperate errors

  async function postLogin(data) {
    try {
      const response = await fetch('http://localhost:5000/api/accounts', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  if (userName.trim() === '') {
    error.userName = 'Required'
    isError = true
  }
  if (userName.length > 20) {
    error.userName = 'Too long'
    isError = true
  }
  if (password.trim() === '') {
    error.userName = 'Required'
    isError = true
  }
  if (password.length < 6) {
    error.userName = 'Too short'
    isError = true
  }

  if (!isError) {
    const account = await postLogin({ userName, password })
    console.log(account)
    dispatch(setUser(account)) //detta ska dispatchas
    //history.push("/profile")
  } else {
    //error message
  }
}

/* merga med koden ovan 
const handleSubmit = (e) => {
  e.preventDefault();
 
  dispatch(setUser( {
      name: name, 
      password: password, 
      loggedIn: true
  }))
  console.log(currentUser)

}
*/
  return (

    <div className="login_card"> 

      <h1> Välkommen till AirBean-familjen! </h1>
      <h3> Genom att skapa ett konto nedan kan du spara och se din orderhistorik. </h3>


    <form className="login_form" onSubmit={(e) => submit(e, { userName, password} )}>

      <div>
        <label className="form_label" htmlFor="firstName">Username</label>
        <input type="username" placeholder="username" value={userName}  onChange={(e) => setUsername(e.target.value)}/> 
      </div>

      <div>
        <label className="form_label" htmlFor="password">Password</label>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
      </div>

      <button className="submit_btn" type="submit">Submit</button>

    </form>

    </div>

  )
}

export default Login








