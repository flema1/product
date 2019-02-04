import React, { Component } from 'react';
import {  Link, Redirect} from 'react-router-dom';
import * as Ionicons from 'react-icons/md';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/authActions';
import axios from 'axios';

 class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {auth:false };
  }

  componentWillMount() {
     axios.get('/auth/checkloggedIn').then(res => {
        console.log(res, "header res--------------->");
        //console.log(res.data.data.username + "username");
        this.setState({
           auth: true
          })
      }).catch(err => {
        console.log(err);
      })
  }
  componentDidMount() {
    // document.body.scrollTop = 0;
    // document.querySelector('.menu').classList.remove('open');
    // alert('c')
    //if (this.state.auth) {
      axios.get('/auth/checkloggedIn').then(res => {
        console.log(res, "header res--------------->");
        //console.log(res.data.data.username + "username");
        // this.setState({
        //    username: res.data.firstName,
        //   })
      }).catch(err => {
        console.log(err);
      })
    //}
  }
//     this.previousWidth = 0;
//     this.menuButton = (
//       <button className="menuBtn"
//         onClick={
//           () => {
//             document.querySelector(".menu").classList.toggle("open");
//           }
//         }
//       >
//         MENU
//       </button>
//     );

    //this.loggedInMenu = (

    // loggedInMenu(){
    //   console.log('LO')
    //   return (
     
    // );
    // }

    //this.loggedOutMenu = (
    // loggedOutMenu(){

    // return (
      
    // );
    //}
     //this.setNav();

//}
  displayHeader() {
    console.log(this.props.username , "this.props.username ")
      const currentApiToken = sessionStorage.getItem('API_TOKEN');
     console.log(currentApiToken, 'currentApiToken');
    if (this.props.isLoginSuccess && currentApiToken || this.props.username ) {
        console.log(currentApiToken, 'currentApiToken2');
      return ( <div className="menu"><Link to="/profile"><Ionicons.MdFavorite width={'60px'} height={'2em'} vertical-align={'top'}/*onClick={ this.searchSong.bind(this, this.props.searchValue)}*/ viewBox={"0 -10 50 50"}/></Link>
        <Ionicons.MdFavorite width={'60px'} height={'2em'} vertical-align={'top'}/*onClick={ this.searchSong.bind(this, this.props.searchValue)}*/ viewBox={"0 -10 50 50"}/>
        <Ionicons.MdShoppingCart width={'60px'} height={'2em'} vertical-align={'top'}/*onClick={ this.searchSong.bind(this, this.props.searchValue)}*/ viewBox={"0 -10 50 50"}/>
      <a href='http://localhost:3001/logout' >logoutsssss</a>
         {/*<button  href='http://localhost:3001/logout' className="btn btn-primary" onClick={()=>this.props.logOutUser()}>log out</button>*/}
        

      </div>)
    }

      return (<div className="menu loginMenu">
      {/*<Link onlyActiveOnIndex={true} key={5} activeClassName="activeNavLink" className="navLink">*/}
        <Link to="/Login">LogIn / Sign Up</Link>
         {/*</Link>*/}
       </div>)
     
    }
  //}

  // setNav() {
  //   // check for auth here
  //   //const True = true;
  //   if (this.props.isLoginSuccess) {
  //     this.setState({ nav: this.loggedInMenu });
  //   } else {
  //     this.setState({ nav: this.loggedOutMenu });
  //   }
  // }

  render() {
    console.log(this.props.isLoginSuccess, "isLoginSuccess")
    if (this.props.isLoginSuccess || this.state.auth) {
            return ( <div className="menu"><Link to="/profile"><Ionicons.MdPersonOutline width={'60px'} height={'2em'} vertical-align={'top'}/*onClick={ this.searchSong.bind(this, this.props.searchValue)}*/ viewBox={"0 -10 50 50"}/></Link>
        <Ionicons.MdFavorite width={'60px'} height={'2em'} vertical-align={'top'}/*onClick={ this.searchSong.bind(this, this.props.searchValue)}*/ viewBox={"0 -10 50 50"}/>
         <Link to="/cart"><Ionicons.MdShoppingCart width={'60px'} height={'2em'} vertical-align={'top'}/*onClick={ this.searchSong.bind(this, this.props.searchValue)}*/ viewBox={"0 -10 50 50"}/></Link>
        <a href='http://localhost:3001/auth/logout' >logout</a>
         {/*<button href='http://localhost:3001/logout' className="btn btn-primary" onClick={()=>this.props.logOutUser()}>log out</button>*/}
        

      </div>);
        }
    return (
      <header className="header">
        {this.state.nav}
        {/*{this.setNav.bind(this)}*/}
        {/*{ this.displayHeader() }*/}
         <Link to="/Login">LogIn / Sign Up</Link>
        <SearchBar/>
      
      </header>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    isLoginPending: state.auth.isLoginPending,
    isLoginSuccess: state.auth.isLoginSuccess,
    loginError: state.auth.loginError
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: (user) => {
      dispatch(logOutUser(user))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

