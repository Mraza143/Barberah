import React, { Fragment, useState, useEffect } from 'react'
import FaceIcon from '@material-ui/icons/Face'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader/Loader'
import { useAlert } from 'react-alert'
import { clearErrors, register } from '../redux/actions/userAction'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import 'react-dropdown/style.css';
import ProfilePic from  '/images/Profile.png'

const Register = () => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const history = useHistory()
  const { error, loading, isAuthenticated } = useSelector((state) => state.user)

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role:'',
  })

  const { name, email, password, role } = user
  const [avatar, setAvatar] = useState(ProfilePic)
  const [avatarPreview, setAvatarPreview] = useState(ProfilePic)

  const optionss = [
    'user', 'salonowner'
  ];
  const defaultOptions = optionss[0];
  //   -------------------------
  const registerSubmit = (e) => {
    e.preventDefault()
    const myForm = new FormData()
    myForm.set('name', name)
    myForm.set('email', email)
    myForm.set('password', password)
    myForm.set('role', role)
    myForm.set('avatar', avatar)
    dispatch(register(myForm)) // userData is myForm in userAction
  }
  //   -------------------------
  const registerDataChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result)
          setAvatar(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    } else {
      setUser({ ...user, [e.target.name]: e.target.value })
    }
  }
  // ----------------
  // -----------------
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (isAuthenticated) {
      history.push('/')
    }
  }, [dispatch, error, alert, history, isAuthenticated])

  // --------------
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="h-screen flex">
            <div
              className="hidden lg:flex w-full lg:w-2/3 border-t-2 border-b-2 border-[#5e5e5e]
                  justify-around items-center bg-[url('/images/login_register.jpg')] bg-cover "
            >
              <div className="background-frame w-full mx-auto p-12 mx-12 flex-col items-center space-y-6">
                <h1 className="text-white font-bold text-6xl font-sans">
                  Be Confident, Be Brave, Be Yourself.
                </h1>
                <p className="text-white mt-1">
                  Cut the phone tag. Discover and book Beauty & Wellness professionals near you instantly anytime, anywhere.
                </p>
              </div>
            </div>

            <div className="flex w-full lg:w-1/2 justify-center items-center bg-[#f2f9ff] space-y-8">
              <div className="w-full">
                <form
                  onSubmit={registerSubmit}
                  encType="multipart/form-data"
                  className="bg-white rounded-md shadow-2xl p-12 w-full"
                >
                  <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">
                    Get your FREE Account
                  </h1>
                  <p className="text-sm font-normal text-gray-600 mb-8 text-center">
                    Create Account Now
                  </p>
                  <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
                    <FaceIcon />
                    <input
                      className=" pl-2 w-full outline-none border-none"
                      type="text"
                      placeholder="Name"
                      required
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                    />
                  </div>

                  <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
                    <MailOutlineIcon />
                    <input
                      className="pl-2 w-full outline-none border-none"
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={email}
                      onChange={registerDataChange}
                    />
                  </div>

                  <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
                    <LockOpenIcon />
                    <input
                      className="pl-2 w-full outline-none border-none"
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      value={password}
                      onChange={registerDataChange}
                    />
                  </div>

                  {/* --------------- */}
                

<div className="flex items-center  mb-6 py-2 px-3 rounded-2xl pl-0 pr-0">
  
            <lable>Type: &nbsp;</lable>
            <input type="radio" name='role' value="user" onChange={registerDataChange} />
            <lable>&nbsp;Customer &nbsp;</lable>
            
            <input type="radio" name='role' value="salonowner" onChange={registerDataChange} />
            <lable>&nbsp;Salon Owner</lable>
                  </div>
                  <p>Image: </p>

                  {/* ------------- */}

                  <div className="flex items-center border-2 mb-8 py-3 px-3 rounded-2xl ">
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="w-12 mr-2 h-12 rounded-full"
                    />
                    <input
                      className="w-full outline-none border-2 bg-indigo-100 p-1 text-sm "
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onChange={registerDataChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                  >
                    Register
                  </button>
                  <p className="text-center">
                    Already have an account? 
                    <a href="login" className="underline hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                    &nbsp;Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Register


