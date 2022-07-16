import React, { Fragment, useEffect, useState, useHistory } from 'react'
import './NewSalon.css'
import {useSelector, useDispatch } from 'react-redux'
import { clearErrors, createSalon } from '../../redux/actions/salonAction'
import { useAlert } from 'react-alert'
import { Button } from '@material-ui/core'
// import MetaData from '../layout/MetaData'
// import AccountTreeIcon from '@material-ui/icons/AccountTree'
// import DescriptionIcon from '@material-ui/icons/Description'
// import StorageIcon from '@material-ui/icons/Storage'
// import SpellcheckIcon from '@material-ui/icons/Spellcheck'
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import SideBar from './Sidebar'
import { NEW_SALON_RESET } from '../../redux/constants/salonConstant'

const NewBarber = () => {
  // const history=useHistory()
    const dispatch = useDispatch()
    const alert = useAlert()

    const { loading, error, success } = useSelector((state) => state.newSalon)

  const [name, setName] = useState('')
  const [timings, setTimings]=useState('')
  const [location, setLocation]=useState('')
  const [imagePath, setImagePath] = useState('')
  const [imagePathPreview, setImagePathPreview] = useState('')


  

  useEffect(() => {
    if (error) {
      alert.error(error)
      console.log(error)
      dispatch(clearErrors())
    }
    if (success) {
      alert.success('Salon Created Successfully')
      // history.push('/salonowner/dashboard')
      dispatch({ type: NEW_SALON_RESET })
    }
  }, [dispatch, alert, error, success])

  const createSalonSubmitHandler = (e) => {
    e.preventDefault()
    const myForm = new FormData()

    myForm.set('name', name)
    myForm.set('timings', timings)
    myForm.set('location', location)
    myForm.set('imagePath', imagePath)

    dispatch(createSalon(myForm))
  }

  const imagePathHandler = (e) => {
    if (e.target.name === 'imagePath') {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePathPreview(reader.result)
          setImagePath(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    } 
  }

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {/* --------------- */}

          <form 
          encType='multipart/form-data'
          onSubmit={createSalonSubmitHandler}
          className="form"
          >
            <div className="title">Create Salon</div>
            <div className="input-container ic1">
              <input
                id="salonname"
                className="input"
                type="text"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder=" "
              />
              <div className="cut"></div>
              <label htmlFor="salonname" className="placeholder">
                Salon Name
              </label>
            </div>
           
            <div className="input-container ic2">
              <input
               id="timings" 
               className="input"
                type="text"
                required
                value={timings}
                onChange={(e)=>setTimings(e.target.value)}
                placeholder=" " />
              <div className="cut cut-short"></div>
              <label htmlFor="timings" className="placeholder">
                Timings
              </label>
            </div>
            <div className="input-container ic2">
              <input id="location" className="input" type="text"
              required
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
              placeholder=" " />
              <div className="cut cut-short"></div>
              <label htmlFor="location" className="placeholder">
                Location
              </label>
            </div>

            {/* <div className="flex items-center border-2 mb-8 py-3 px-3 rounded-2xl ">
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="w-12 mr-2 h-12 rounded-full"
                    />
                    {/* <input
                      className="w-full outline-none border-2 bg-indigo-100 p-1 text-sm "
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onChange={registerDataChange}
                    /> */}

            <div className="input-container ic2">
            <input
            className="input createProductFormFile"
                type="file"
                name="imagePath"
                accept="image/*"
                multiple
                onChange={imagePathHandler}
              />
              <div className="cut cut-short"></div>
              <label htmlFor="image" className="placeholder">
                Image File
              </label>
            </div>


            <div className="input-container ic2 product_preview"> 
            <div
            className="input createProductFormImage">
    <img src={imagePathPreview} alt="Salon Preview"/>
            </div>
            </div> 




            <button type="submit" className="submit" disabled={loading ? true : false} >
              Submit
            </button>
          </form>

          {/* --------------- */}
        </div>
      </div>
    </Fragment>
  )
}

export default NewBarber
