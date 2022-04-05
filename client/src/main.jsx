import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Home} from './components'
import { Services } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Main() {
  return (

    <App></App>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));