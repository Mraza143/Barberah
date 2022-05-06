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
import  SignIn1  from './components/SignIn1'
import  Navbar from "./components/Navbar"

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
          <SignIn1 />
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
