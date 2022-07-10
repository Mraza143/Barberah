import React, { Fragment, useEffect, useState } from 'react'
import './NewBarber.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { clearErrors, createProduct } from '../../actions/productAction'
import { useAlert } from 'react-alert'
import { Button } from '@material-ui/core'
// import MetaData from '../layout/MetaData'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import DescriptionIcon from '@material-ui/icons/Description'
import StorageIcon from '@material-ui/icons/Storage'
import SpellcheckIcon from '@material-ui/icons/Spellcheck'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import SideBar from './Sidebar'
// import { NEW_PRODUCT_RESET } from '../../constants/productConstant'

const NewBarber = ({ history }) => {
  //   const dispatch = useDispatch()
  //   const alert = useAlert()

  //   const { loading, error, success } = useSelector((state) => state.newProduct)

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [Stock, setStock] = useState(0)
  const [images, setImages] = useState([])
  const [imagesPreview, setImagesPreview] = useState([])

  const categories = [
    'Laptop',
    'Footwear',
    'Bottom',
    'Tops',
    'Attire',
    'Camera',
    'SmartPhones',
  ]

  useEffect(() => {
    // if (error) {
    //   alert.error(error)
    //   dispatch(clearErrors())
    // }
    // if (success) {
    //   alert.success('Product Created Successfully')
    //   history.push('/admin/dashboard')
    //   dispatch({ type: NEW_PRODUCT_RESET })
    // }
    // dispatch, alert, error, history, success]
  }, [])

  const createProductSubmitHandler = (e) => {
    e.preventDefault()

    const myForm = new FormData()

    myForm.set('name', name)
    myForm.set('price', price)
    myForm.set('description', description)
    myForm.set('category', category)
    myForm.set('Stock', Stock)

    // images.forEach((image) => {
    //   myForm.append('images', image)
    // })
    // dispatch(createProduct(myForm))
  }

  const createProductImagesChange = (e) => {
    // const files = Array.from(e.target.files)
    // setImages([])
    // setImagesPreview([])
    // files.forEach((file) => {
    //   const reader = new FileReader()
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImagesPreview((old) => [...old, reader.result])
    //       setImages((old) => [...old, reader.result])
    //     }
    //   }
    //   reader.readAsDataURL(file)
    // })
  }

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {/* --------------- */}

          <form className="form">
            <div className="title">Create Barber</div>
            <div className="input-container ic1">
              <input
                id="firstname"
                className="input"
                type="text"
                placeholder=" "
              />
              <div className="cut"></div>
              <label for="firstname" className="placeholder">
                Barber Name
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="lastname"
                className="input"
                type="text"
                placeholder=" "
              />
              <div className="cut"></div>
              <label for="lastname" className="placeholder">
                Works At
              </label>
            </div>
            <div className="input-container ic2">
              <input id="email" className="input" type="text" placeholder=" " />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Timings
              </label>
            </div>
            <div className="input-container ic2">
              <input id="email" className="input" type="text" placeholder=" " />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Experience
              </label>
            </div>
            <div className="input-container ic2">
            <input
            className="input"
                type="file"
                name="avatar"
                accept="image/*"
                multiple
              />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Image File
              </label>
            </div>
            <button type="text" className="submit">
              submit
            </button>
          </form>

          {/* --------------- */}
        </div>
      </div>
    </Fragment>
  )
}

export default NewBarber
