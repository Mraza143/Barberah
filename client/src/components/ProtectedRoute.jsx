import React, {Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user)

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Redirect to="/login" />
            }

            if (isAdmin === true && user.role !== 'salonowner') {
              return <Redirect to="/login" />
            }

            return <Component {...props} />
          }}
        />
      )}
    </Fragment>
  )
}

export default ProtectedRoute











// Raza

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const [role,setRole]= useState("")
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user)


//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       console.log(foundUser)
//       setRole(foundUser["user"]["role"])

//     }
    
//   }, [isAuthenticated , loading]);

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Redirect to="/login" />
//             }

//             if (isAdmin === true && role !== 'salonowner') {
//               return <Redirect to="/login" />
//             }

//             return <Component {...props} />
//           }}
//         />
//       )}
//     </Fragment>
//   )
// }

// export default ProtectedRoute