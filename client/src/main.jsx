import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/store';
import { Provider } from 'react-redux';


// export default function Main() {

//   return (

//     <App></App>
//   );
// }

ReactDOM.render(
<React.StrictMode>
  <Provider store={store}>
{/* <Main /> */}
<App/>
</Provider>
</React.StrictMode>,
document.getElementById("root")
);