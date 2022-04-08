import { useState } from 'react'
import { Home, Welcome, Footer , Navbar, Services, Salons,SpecificSalon} from './components'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';


const App = () =>{
  return (
    <Router>
       <div className="gradient-bg-welcome">
      <Navbar/>
      </div>
      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/salons">
              <Salons
              total={6}
              />
            </Route>
            <Route  path="/specificSalon/:id/:name">
            <SpecificSalon/>
            </Route>
          </Switch>
        <Footer/>

  </Router>
  )
}

export default App


/*
<Router>

  </Router>


*/


