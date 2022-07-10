import React from 'react'
import './Sidebar.css'
import logo from "/images/logo2.png";
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import ListAltIcon from '@material-ui/icons/ListAlt'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import RateReviewIcon from '@material-ui/icons/RateReview'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <Link to="/admin/barbers">
        <p>
        <PeopleIcon /> All Barbers
        </p>
      </Link>

      <Link to="/admin/barber">
        <p>
        <AddIcon /> Create Barber
        </p>
      </Link>


      <Link to="/admin/appointments">
        <p>
          <ListAltIcon />
          Appointments
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  )
}

export default Sidebar