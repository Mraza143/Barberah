import React, { Fragment, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import './BarbersList.css'
import { useSelector, useDispatch } from 'react-redux'
// import {
//   clearErrors,
//   getAdminProduct,
//   deleteProduct,
// } from '../../actions/productAction'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { Button } from '@material-ui/core'
// import MetaData from '../layout/MetaData'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import SideBar from './Sidebar'
// import { DELETE_PRODUCT_RESET } from '../../constants/productConstant'

const BarbersList = ({ history }) => {
//   const dispatch = useDispatch()
//   const alert = useAlert()

//   const { error, products } = useSelector((state) => state.products)

//   const { error: deleteError, isDeleted } = useSelector(
//     (state) => state.product,
//   )

  const deleteProductHandler = (id) => {
    // dispatch(deleteProduct(id))
  }

  useEffect(() => {
    // if (error) {
    //   alert.error(error)
    //   dispatch(clearErrors())
    // }

    // if (deleteError) {
    //   alert.error(deleteError)
    //   dispatch(clearErrors())
    // }

    // if (isDeleted) {
    //   alert.success('Product Deleted Successfully')
    //   history.push('/admin/dashboard')
    //   dispatch({ type: DELETE_PRODUCT_RESET })
    // }

    // dispatch(getAdminProduct())
    // [dispatch, alert, error, deleteError, history, isDeleted]
  }, [])

  const columns = [
    { field: 'id', headerName: 'Barber ID', minWidth: 100, flex: 0.3 },

    {
      field: 'name',
      headerName: 'Barber Name',
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: 'worksAt',
      headerName: 'Works At',
    //   type: 'number',
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: 'timings',
      headerName: 'Timings',
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: 'experience',
      headerName: 'Experience',
      type: 'number',
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: 'actions',
      flex: 0.3,
      headerName: 'Actions',
      minWidth: 150,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            {/* <Link to={`/admin/product/${params.getValue(params.id, 'id')}`}> */}
            <Link to={`/admin/product/`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                // deleteProductHandler(params.getValue(params.id, 'id'))
                deleteProductHandler
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        )
      },
    },
  ]

  const dummyData=[
    {
        id:1,
    name:"Shayan",
    worksAt:"Shah Jhan Barbers",
    timings:"10am-10pm",
    experience:10
    },
    
    {
        id:2,
    name:"Shayan",
    worksAt:"Shah Jhan Barbers",
    timings:"10am-10pm",
    experience:10
    },
    {
        id:3,
    name:"Shayan",
    worksAt:"Shah Jhan Barbers",
    timings:"10am-10pm",
    experience:10
    },
    {
        id:4,
    name:"Shayan",
    worksAt:"Shah Jhan Barbers",
    timings:"10am-10pm",
    experience:10
    },

  ]

  const rows=[]
  dummyData.forEach((item)=>{
    rows.push({
    id:item.id,
    name:item.name,
    worksAt:item.worksAt,
    timings:item.timings,
    experience:item.experience
    })
  })

//   const rows = []
//   rows.push({
//     id:1234567890,
//     name:"Shayan",
//     worksAt:"Shah Jhan Barbers",
//     timings:"10am-10pm",
//     experience:10
//   })

//   products &&
//     products.forEach((item) => {
//       rows.push({
//         id: item._id,
//         stock: item.Stock,
//         price: item.price,
//         name: item.name,
//       })
//     })

  return (
    <Fragment>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">All Barbers</h1>

          <DataGrid
            // rows={rows}
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  )
}

export default BarbersList