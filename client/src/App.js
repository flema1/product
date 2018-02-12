import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from './actions/authActions';
import Auth from './modules/Auth';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Login from './containers/Login';
import Home from './containers/Home';
import Products from './containers/Products';
import Profile from './containers/Profile';
import RegisterPage from './containers/RegisterPage';


class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      auth: sessionStorage.getItem('API_TOKEN'), //Auth.isUserAuthenticated(),
      shouldFireRedirect: false,
      authenticated:false,
      username:null
    };
    //this.resetFireRedirect = this.resetFireRedirect.bind(this);
  }
  
  componentDidMount() {
    //window.addEventListener('load', this.handleLoad);
    if (this.state.auth) {
      axios.post('/auth/checkAuth', {
        token: sessionStorage.getItem('API_TOKEN') //Auth.getToken()
      }).then(res => {
        console.log(res, "username--------------->");
        //console.log(res.data.data.username + "username");
        this.setState({
           username: res.data.firstName,
          })
      }).catch(err => {
        console.log(err);
      })
    }
  }
  render() {
    return (
     <Router>
        <div className="App">
          <Header username={this.state.username}/>
          <SideNav/>
          <Route exact path={"/home"} component={Home}/>
          <Route exact path={"/products"} component={Products}/>
          <Route exact path = {"/login"} component={Login}/>
          <Route exact path = {"/profile"} component={Profile}/>
          <Route exact path ={"/register"} component={RegisterPage}/>
        </div>
      </Router>
    );
  }
}

export default App;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     registerUser: (user) => {
//       dispatch(register(user))
//     }
//   }
// }

// export default connect(/*mapStateToProps*/ null, mapDispatchToProps)(RegisterPage);


