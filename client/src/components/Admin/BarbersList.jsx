import React, { Fragment, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import './BarbersList.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import SideBar from './Sidebar'
import { clearErrors, getSalonOwnerBarbers } from '../../redux/actions/barberAction'

const BarbersList = ({ history }) => {
  const dispatch = useDispatch()
  const alert = useAlert()

  const { error, barbers } = useSelector((state) => state.barbers)

  // const { error: deleteError, isDeleted } = useSelector(
  //   (state) => state.product,
  // )

  const deleteProductHandler = (id) => {
    // dispatch(deleteProduct(id))
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }

    // if (deleteError) {
    //   alert.error(deleteError)
    //   dispatch(clearErrors())
    // }

    // if (isDeleted) {
    //   alert.success('Product Deleted Successfully')
    //   history.push('/admin/dashboard')
    //   dispatch({ type: DELETE_PRODUCT_RESET })
    // }

    dispatch(getSalonOwnerBarbers())
    // [dispatch, alert, error, deleteError, history, isDeleted]
  }, [dispatch, alert, error,history])

  const columns = [
    { field: 'id', headerName: 'Barber ID', minWidth: 100, flex: 0.5 },

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


  const rows = []

  barbers &&
  barbers.forEach((item) => {
      rows.push({
        id: item._id,
    name:item.name,
    worksAt:item.worksAt,
    timings:item.timings,
    experience:item.experience
      })
    })

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