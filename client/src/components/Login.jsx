import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'







const LogIn = () => {

  // const loginSubmit = (e) => {
  //   e.preventDefault()

  // }

 

  return (
    <Fragment>

<div className="h-screen flex">
<div className="hidden lg:flex w-full lg:w-2/3 border-t-2 border-b-2 border-[#5e5e5e]
          justify-around items-center bg-[url('/images/login_register.jpg')] bg-cover ">
           
            <div className="background-frame w-full mx-auto p-12 mx-12 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-6xl font-sans">Barberah</h1>
              <p className="text-white mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum nesciunt nam illum dicta voluptatibus suscipit, quibusdam fuga illo mollitia rerum doloribus modi ut consequuntur sit magni perferendis enim! Iste? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repellat natus iste aliquam aliquid enim in voluptatibus dicta ducimus ipsa placeat ullam cupiditate itaque eveniet nam quam, earum tempora facere.
             
              </p>
            </div>
            
          </div>


          <div className="flex w-full lg:w-1/2 justify-center items-center bg-[#f2f9ff] space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">

            <form className="bg-white rounded-md shadow-2xl p-5"  >
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input id="email" className=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" 
                  required
                  // value={loginEmail}
                  // onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input className="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password"
                required
                // value={loginPassword}
                // onChange={(e) => setLoginPassword(e.target.value)}
                />
                
              </div>
{/* --------------- */}
{/* flex justify-center */}
<div className=" flex items-center  mb-8 py-2 px-3 rounded-2xl pl-0 pr-0 ">
  
  
    <select className=" block w-full px-3 py-1.5 font-normal text-gray-700  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" defaultValue={'DEFAULT'} >
       
        <option  value="DEFAULT" disabled>Select Role : </option>
        <option value="2">Customer</option>
        <option value="3">Salon Owner</option>
        
    </select>
  
</div>

              {/* ------------- */}
              <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
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
  


export default LogIn