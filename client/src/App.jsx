import { useState } from 'react'
import {
  Home,
  Welcome,
  Footer,
  Services,
  Salons,
  SpecificSalon,
} from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Barberprofile from './components/BarberProfile'
import  Navbar from "./components/Navbar"
import  LogIn  from './components/Login'
import Register from "./components/Register"
import Dashboard from './components/Admin/Dashboard'
import BarbersList from "./components/Admin/BarbersList"
import NewBarber from './components/Admin/NewBarber'
// import LoginSignup from './components/LoginSignup'



const App = () => {
  return (
        <Router>
    <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

{/* Admin Pages */}
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        
        <Route exact path="/admin/barbers">
          <BarbersList />
        </Route>

        <Route exact path="/admin/barber">
          <NewBarber />
        </Route>

       
        <Route path="/salons">
          <Salons total={6} />
        </Route>
        <Route path="/specificSalon/:id/:name">
          <SpecificSalon />
        </Route>
        <Route path="/specificBarber/:id/:name/:sname">
          <Barberprofile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

/*
<Router>

  </Router>


*/
