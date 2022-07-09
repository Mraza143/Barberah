import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Doughnut, Line } from 'react-chartjs-2'
import { useSelector, useDispatch } from 'react-redux'
// import { getAdminProduct } from '../../actions/productAction'
// import { getAllOrders } from '../../actions/orderAction'
// import { getAllUsers } from '../../actions/userAction'
// import MetaData from '../layout/MetaData'


const Dashboard = () => {

  const dispatch = useDispatch()

//   const { products } = useSelector((state) => state.products)
//   const { orders } = useSelector((state) => state.allOrders)
//   const { users } = useSelector((state) => state.allUsers)

//   let outOfStock = 0
//   products &&
//     products.forEach((item) => {
//       if (item.Stock === 0) {
//         outOfStock += 1
//       }
//     })

  useEffect(() => {
    // dispatch(getAdminProduct())
    // dispatch(getAllOrders())
    // dispatch(getAllUsers())
  }, [])

//   let totalAmount = 0
//   orders &&
//     orders.forEach((item) => {
//       totalAmount += item.totalPrice
//     })

  const lineState = {
    labels: ['Initial Amount', 'Amount Earned'],
    datasets: [
      {
        label: 'TOTAL AMOUNT',
        backgroundColor: ['tomato'],
        hoverBackgroundColor: ['rgb(197, 72, 49)'],
        // data: [0, totalAmount],
        data: [0, 100000],
      },
    ],
  }

  const doughnutState = {
    labels: ['Out of Stock', 'InStock'],
    datasets: [
      {
        backgroundColor: ['#00A6B4', '#6800B4'],
        hoverBackgroundColor: ['#4B5000', '#35014F'],
        data: [3, 7],
      },
    ],
  }

  return (
    <div className="dashboard">
      {/* <MetaData title="Dashboard - Admin Panel" /> */}
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1" className='text-5xl'>Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> Rs . 500000
            </p>
          </div>




          <div className="dashboardSummaryBox2">

{/* ----------------- */}
<div class="bg-gray-100 flex items-center min-w-[16rem] text-center stats">
  <Link to="/admin/appointments" class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <div class="flex justify-center items-center">
        <div>
              <h1 class="mt-5 text-2xl font-medium">Appointments</h1>
        <p class="mt-2 text-xl">20</p>
        </div>
    </div>
  </Link>
</div>


{/* ------------ */}
<div class="bg-gray-100 flex items-center min-w-[16rem] text-center stats">
  <Link to="/admin/orders" class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <div class="flex justify-center items-center">
        <div>
              <h1 class="mt-5 text-2xl font-medium">Barbers</h1>
        <p class="mt-2 text-xl">20</p>
        </div>
    </div>
  </Link>
</div>
{/* --------------- */}
<div class="bg-gray-100 flex items-center min-w-[16rem] text-center stats">
  <Link to="/admin/users" class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <div class="flex justify-center items-center">
        <div>
              <h1 class="mt-5 text-2xl font-medium">Users</h1>
        <p class="mt-2 text-xl" >20</p>
        </div>
    </div>
  </Link>
</div>

{/* --------------- */}


            
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard