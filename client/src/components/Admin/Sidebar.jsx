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
      <Link to="/salonowner/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <Link to="/salonowner/barbers">
        <p>
        <PeopleIcon /> All Barbers
        </p>
      </Link>

      <Link to="/salonowner/barber">
        <p>
        <AddIcon /> Create Barber
        </p>
      </Link>

      <Link to="/salonowner/salons">
        <p>
        <PeopleIcon /> All Salons
        </p>
      </Link>

      <Link to="/salonowner/salon">
        <p>
        <AddIcon /> Create Salon
        </p>
      </Link>



      <Link to="/salonowner/appointments">
        <p>
          <ListAltIcon />
          Appointments
        </p>
      </Link>
      <Link to="/salonowner/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/salonowner/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  )
}

export default Sidebar