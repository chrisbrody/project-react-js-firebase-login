import React, { Component } from 'react';
import fire from '../config/fire';

class Home extends Component {
    
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

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          if(user) {
            this.setState({
                user: user,
                email: user.email,
            });
            console.log(this.state.email);
            
          } else {
            this.setState({user:null})
          }
        })
    }

    componentDidMount() {
        this.authListener()
    }

    logout = () => {
        fire.auth().signOut()
    }


    render() {

        return (
            <div>
                {}
                Welcome Home {this.state.email}
                <br />
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}

export default Home
