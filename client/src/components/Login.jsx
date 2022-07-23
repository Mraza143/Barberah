import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LockOpenIcon from '@material-ui/icons/LockOpen'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login } from '../redux/actions/userAction'
import Loader from "./Loader/Loader"
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'


const LogIn = () => {

// ------------------
  const dispatch = useDispatch()
  const alert=useAlert()
  const history=useHistory()
  const { error, loading, isAuthenticated } = useSelector((state) => state.user)

// -----------------
const [loginEmail, setLoginEmail] = useState('')
const [loginPassword, setLoginPassword] = useState('')

  // ------------
  const loginSubmit = (e) => {
    //e.preventDefault()
    dispatch(login(loginEmail, loginPassword))

    setTimeout(() => {
      window.location.reload
    }, 8000); //miliseconds

   

  }

    // -----------------
    useEffect(() => {
      if (error) {
        alert.error(error)
        dispatch(clearErrors())
      }
      if (isAuthenticated) {
        history.push("/")
      }
    }, [dispatch, error, alert, history, isAuthenticated])

 

  return (
    <Fragment>

    {
      loading? (
        <Loader/>
        ) : (
          <Fragment>
          <div className="h-screen flex bg-white justify-center items-center">
          
                    <div className="flex w-full lg:w-6/12 justify-center items-center bg-[#f2f9ff] space-y-8">
                      <div className="w-full px-8 md:px-32 lg:px-24 bg-white">
          
                      <form onSubmit={loginSubmit}  className="bg-white rounded-md shadow-2xl p-8"  >
                        <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">Hello Again!</h1>
                        <p className="text-sm font-normal text-gray-600 mb-8 text-center">Welcome Back</p>
          
                        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                          <MailOutlineIcon />
                          <input id="email" className=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" 
                            required
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                          />
                        </div>
          
                        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                         
                           <LockOpenIcon />
                          <input className="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password"
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          />
                          
                        </div>
          {/* --------------- */}
          {/* <div className=" flex items-center  mb-8 py-2 px-3 rounded-2xl pl-0 pr-0 ">
              <select className=" block w-full px-3 py-1.5 font-normal text-gray-700  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" defaultValue={'DEFAULT'} >
                  <option  value="DEFAULT" disabled>Select Role : </option>
                  <option value="2">Customer</option>
                  <option value="3">Salon Owner</option>
              </select>
          </div> */}
          
                        {/* ------------- */}
                        <button  type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
                        <div className="flex justify-between mt-4">
                          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>
          
                          <Link to="/register" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</Link>
                        </div>
                        
                      </form>
                      </div>
                      
                    </div>
                </div>
            </Fragment>
        )
        
      }

      </Fragment>
   
  )
}
  


export default LogIn