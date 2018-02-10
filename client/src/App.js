import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Nav from './components/NavBar';
import Home from './containers/Home';
import Products from './containers/Products';

class App extends Component {
componentWillMount(){
  axios.get(`/products`)
    .then(res => {
      console.log (res, "res")
    }).catch(err => console.log(err));
}
  render() {
    return (
     <Router>
        <div className="App">
          <Nav/>
           <Route exact path={"/Home"} component={Home}/>
           <Route exact path={"/Products"} component={Products}/>
        </div>
      </Router>
    );
  }
}

export default App;
