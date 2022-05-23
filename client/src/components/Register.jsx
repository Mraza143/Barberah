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
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
  const [avatar, setAvatar] = useState('/images/login_register.jpg')
  const [avatarPreview, setAvatarPreview] = useState(
    '/images/login_register.jpg',
  )
  const optionss = [
    'customer', 'salonowner'
  ];
  const defaultOptions = optionss[0];
  // const options = [  if you want to use react-select then use this array of object (options)
  //   { value: 'customer', label: 'Customer' },
  //   { value: 'salonowner', label: 'Salon Owner' },
  // ]
  // const [selectedOption, setSelectedOption] = useState(null)
  //   -------------------------
  const registerSubmit = (e) => {
    e.preventDefault()
    const myForm = new FormData()
    myForm.set('name', name)
    myForm.set('email', email)
    myForm.set('password', password)
    myForm.set('avatar', avatar)
    myForm.set('role', role)
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
                  Barberah
                </h1>
                <p className="text-white mt-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  laborum nesciunt nam illum dicta voluptatibus suscipit,
                  quibusdam fuga illo mollitia rerum doloribus modi ut
                  consequuntur sit magni perferendis enim! Iste? Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. At repellat
                  natus iste aliquam aliquid enim in voluptatibus dicta ducimus
                  ipsa placeat ullam cupiditate itaque eveniet nam quam, earum
                  tempora facere.
                </p>
              </div>
            </div>

            <div className="flex w-full lg:w-1/2 justify-center items-center bg-[#f2f9ff] space-y-8">
              <div className="w-full px-8 md:px-32 lg:px-24">
                <form
                  onSubmit={registerSubmit}
                  encType="multipart/form-data"
                  className="bg-white rounded-md shadow-2xl p-5"
                >
                  <h1 className="text-gray-800 font-bold text-2xl mb-1">
                    Hello Again!
                  </h1>
                  <p className="text-sm font-normal text-gray-600 mb-8">
                    Welcome Back
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
                

                  {/* ------------ */}

                  {/* <div className="flex items-center  mb-6 py-2 px-3 rounded-2xl pl-0 pr-0">
                    <Select
                      className='className=" block w-full px-3 py-1.5 font-normal text-gray-700  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"'
                      name="role"
                      // value={role}
                      defaultValue={role}
                      // onChange={setSelectedOption}
                      onChange={registerDataChange}
                      options={options}
                    />
                  </div> */}

<div className="flex items-center  mb-6 py-2 px-3 rounded-2xl pl-0 pr-0">
  <lable>customer</lable>
            <input type="radio" name='role' value="customer" onChange={registerDataChange} />
            <lable>salonOwner</lable>
            <input type="radio" name='role' value="salonowner" onChange={registerDataChange} />
                  </div>
                  <p>{user.role}</p>
                  <p>hahah</p>

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

/*
                    <select
                      className='className=" block w-full px-3 py-1.5 font-normal text-gray-700  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"'
                      name="role"
                      value={role}
                      // defaultValue={role}
                      onChange={registerDataChange}
                      
                      >
                        <option value="customer">Customer</option>
                        <option value="salonowner">Salon Owner</option>
</select>
*/
