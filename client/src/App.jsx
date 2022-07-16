import { useState ,useEffect } from 'react'
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
import SalonsList from "./components/Admin/SalonsList"
import NewSalon from "./components/Admin/NewSalon"
import AboutUs from "./components/aboutUs"
import ContactUs from './components/contactUs'
import ProtectedRoute from './components/ProtectedRoute'
import { loadUser } from './redux/actions/userAction'
// import LoginSignup from './components/LoginSignup'
import store from './redux/store'




const App = () => {
  // useEffect(()=>{
  //   store.dispatch(loadUser())
  // }, []);

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


        <Route path="/AboutUs">
          <AboutUs/>
        </Route>
        <Route path="/ContactUs">
          <ContactUs/>
        </Route>


       
        <Route path="/salons">
          <Salons total={10} />
        </Route>

        <Route path="/specificSalon/:id/:name">
          <SpecificSalon />
        </Route>
        <Route path="/specificBarber/:id/:name/:sname">
          <Barberprofile />
        </Route>



{/* Admin Pages */}
        <ProtectedRoute 
        isAdmin={true}
         exact
         path="/salonowner/dashboard"
         component={Dashboard }
        />

{/* <Route path="/salonowner/dashboard">
          <Dashboard />
        </Route> */}




        <ProtectedRoute 
        isAdmin={true}
         exact
         path="/salonowner/barbers"
         component={BarbersList }
        />

{/* <Route exact path="/salonowner/barbers">
          <BarbersList />
        </Route> */}

        <ProtectedRoute 
        isAdmin={true}
         exact
         path="/salonowner/barber"
         component={NewBarber }
        />

{/* <Route exact path="/salonowner/barber">
          <NewBarber />
        </Route> */}


<ProtectedRoute 
        isAdmin={true}
         exact
         path="/salonowner/salons"
         component={SalonsList }
        />

{/* <ProtectedRoute 
        isAdmin={true}
         exact
         path="/salonowner/salon"
         component={NewSalon }
        /> */}

        <Route exact path="/salonowner/salon">
          <NewSalon />
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
