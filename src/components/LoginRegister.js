import React, {Component} from 'react';
import fire from '../config/fire';

class LoginRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fireErrors: '',
      formTitle: 'Login',
      loginBtn: true

    }
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]:e.target.value })
  } 

  login = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        this.setState({ fireErrors:error.message })
    });
  }

  register = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        this.setState({ fireErrors:error.message })
    });
  }

  getAction = action => {
      if(action === 'register') {
          this.setState({
              formTitle: 'Register New User', 
              loginBtn: false, 
              fireErrors: ''
          })
      } else {
        this.setState({
            formTitle: 'Login', 
            loginBtn: true, 
            fireErrors: ''
        })
      }
  }


  render(){
    //   display errors 
    let errorNotifiction = this.state.fireErrors ? (<div className="Error">{this.state.fireErrors}</div>) : null

    // handle first button 
    let submitBtn = this.state.loginBtn ? 
        (<input type="submit" className="loginBtn" onClick={this.login} value="Enter" />) : 
        (<input type="submit" className="loginBtn" onClick={this.register} value="Register" />)

    // handle second button 
    let login_register = this.state.loginBtn ? 
        (<input type="submit" className="registerBtn" onClick={() => this.getAction('register')} value="Register" />) : 
        (<input type="submit" className="registerBtn" onClick={() => this.getAction('login')} value="Login" />)

   return (
      <>
        <div className="form_block">
            <div id="title">{this.state.formTitle}</div>
            <div className="body">
                    {errorNotifiction}
                    <form>
                        <input type="text" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />

                        <input type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" />

                        {submitBtn}
                    </form>
                    {login_register}
                </div>
        </div>
      </>
   )
  }

}

export default LoginRegister;
