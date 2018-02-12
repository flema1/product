import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';

// import './LoginForm.css';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e){
    this.setState({email: e.target.value},()=> console.log(this.state.email, "email"));
   
  }

  onChangePassword(e){
    this.setState({password: e.target.value},  ()=>console.log(this.state.password, "password"));
   
  }

   onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.loginUser(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
     let {email, password} = this.state;
     let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <form name="loginForm" /*onSubmit={this.onSubmit}*/>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={this.onChangeEmail.bind(this) } value={this.state.email} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={this.onChangePassword.bind(this) } value={this.state.password} />
          </div>
        </div>

        {/*<input type="submit" value="Login" />*/}
        <button /*className="loginBtn twitterBtn" */ onClick={this.onSubmit.bind(this)}>Login</button>


        <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { loginError && <div>{loginError.message}</div> }
        </div>
      </form>
    )
  }

 
}
//}
// const mapStateToProps = (state) => {
//   return {
//     isLoginPending: state.isLoginPending,
//     isLoginSuccess: state.isLoginSuccess,
//     loginError: state.loginError
//   };
// }



const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => {
      dispatch(login(email, password))
    }
  }
}

export default connect(/*mapStateToProps*/ null, mapDispatchToProps)(LoginForm);
