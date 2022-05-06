import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "./SignIn1.css"
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, login, register } from '../redux/actions/userAction'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn1 = ({ history }) => {
  const dispatch = useDispatch()
  const { error, loading, isAuthenticated } = useSelector((state) => state.user)

  // ---------------------
  const loginTab = useRef(null)
  const registerTab = useRef(null)
  const switcherTab = useRef(null)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = user
  //   -------------------
  const loginSubmit = (e) => {
    e.preventDefault()
    dispatch(login(loginEmail, loginPassword))
  }
  //   -------------------------
  const registerSubmit = (e) => {
    e.preventDefault()
    const myForm = new FormData()
    myForm.set('name', name)
    myForm.set('email', email)
    myForm.set('password', password)
    dispatch(register(myForm)) // userData is myForm in userAction
  }


  //   -------------------------
  const registerDataChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
  }

  // -----------------
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (isAuthenticated) {
      history.push("")
    }
  }, [dispatch, error, toast, history, isAuthenticated])

  // ------------------------

  const switchTabs = (e, tab) => {
    if (tab === 'login') {
      switcherTab.current.classList.add('shiftToNeutral')
      switcherTab.current.classList.remove('shiftToRight')

      registerTab.current.classList.remove('shiftToNeutralForm')
      loginTab.current.classList.remove('shiftToLeft')
    }
    if (tab === 'register') {
      switcherTab.current.classList.add('shiftToRight')
      switcherTab.current.classList.remove('shiftToNeutral')

      registerTab.current.classList.add('shiftToNeutralForm')
      loginTab.current.classList.add('shiftToLeft')
    }
  }

  

 

  return (
    <Fragment>
    <div className="LoginSignUpContainer">
      <div className="LoginSignUpBox">
        <div>
          <div className="login_signUp_toggle">
            <p onClick={(e) => switchTabs(e, 'login')}>LOGIN</p>
            <p onClick={(e) => switchTabs(e, 'register')}>REGISTER</p>
          </div>
          <button ref={switcherTab}></button>
        </div>
        {/* ------------ */}
        <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
          <div className="loginEmail">
            <input
              type="email"
              placeholder="Email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          {/* ---------- */}
          <div className="loginPassword">
            <input
              type="password"
              placeholder="Password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <Link to="/password/forgot">Forget Password ?</Link>
          <input type="submit" value="Login" className="loginBtn" />
        </form>
        {/* -------------- */}
        <form
          className="signUpForm"
          ref={registerTab}
          encType="multipart/form-data"
          onSubmit={registerSubmit}
        >
          <div className="signUpName">
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={registerDataChange}
            />
          </div>
          <div className="signUpEmail">
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={registerDataChange}
            />
          </div>
          <div className="signUpPassword">
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={registerDataChange}
            />
          </div>

      
          <input
            type="submit"
            value="Register"
            className="signUpBtn"
            //   disabled={loading ? true : false}
          />
        </form>
      </div>
    </div>
  </Fragment>
  )
}
  


export default SignIn1