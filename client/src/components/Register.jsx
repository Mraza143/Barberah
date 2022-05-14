import React, { Fragment } from 'react'

const Register = () => {
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


      <form encType="multipart/form-data" className="bg-white rounded-md shadow-2xl p-5" >
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl" >
          {/* <FaceIcon /> */}
          <input 
          className=" pl-2 w-full outline-none border-none"
            type="text"
            placeholder="Name"
            required
            name="name"
            // value={name}
          />
        </div>

        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl " >
          {/* <MailOutlineIcon /> */}
          <input
          className="pl-2 w-full outline-none border-none" 
           type="email"
            placeholder="Email"
             required
              name="email" />
        </div>

        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl " >
          {/* <LockOpenIcon /> */}
          <input
           className="pl-2 w-full outline-none border-none"
            type="password"
            placeholder="Password"
            required
            name="password"
          />
        </div>

        <div className="flex items-center border-2 mb-8 py-3 px-3 rounded-2xl " >
          <img src="/images/login_register.jpg" alt="Avatar Preview" className='w-12 mr-2 h-12 rounded-full' />
          <input
          className="w-full outline-none border-2 bg-indigo-100 p-1 text-sm "
           type="file"
            name="avatar"
             accept="image/*" 
             />
        </div>

        <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Register</button>
      </form>
</div>
</div>

</div>
    </Fragment>
  )
}

export default Register
