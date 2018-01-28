import React from 'react';
import {Link} from 'react-router-dom'
import api from '../services/api'

class Login extends React.Component{
  state={
    username: "",
    password: "",
    error: false
  }

  handleChange = (event,attr) => {
   this.setState({[attr]:event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    api.auth.login(this.state.username, this.state.password)
    .then(res => {
      if (res.error){
      this.setState({error:true});
    } else {
      this.props.handleLogin(res)
    }
    });
  }

  render(){
    return(
      <div style={{ opacity: ".9", margin: " 0 20%"}} className="login ui container segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Username:</label>
            <input type="text" value={this.state.username} onChange={(event) => this.handleChange(event,"username")}/>
          </div>
          <div className="field">
            <label>Password:</label>
            <input type="password" value={this.state.password} onChange={(event) => this.handleChange(event,"password")}/>
          </div>
          <button className="ui button">Submit</button>
        </form>
        <br/>
        <Link to="/signup">
          <button className="ui teal basic button">No Account? Sign up!</button>
        </Link>

      </div>
    )
  }
}

export default Login;
