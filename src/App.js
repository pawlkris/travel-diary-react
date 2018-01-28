import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TripContainer from './components/TripContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import api from './services/api'




class App extends Component {
  state={
    trips: [],
    auth: {
      currentUser: {}
    }
  }

  handleLogin = (user) => {
    const currentUser = {currentUser: user};
    localStorage.setItem('token', user.token);
    this.setState({auth: currentUser}, () => {
      this.loadTrips()
      .then(this.props.history.push("/trips/stats"))});
  }

  handleLogout = () => {
    this.setState({
      auth:
        {currentUser: {}
        }
      }
    );
    localStorage.removeItem('token')
  }

  loadTrips = () =>(api.trips.getUserTrips(this.state.auth.currentUser.id)
  .then(json => this.setState({trips:json.trips})))

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
    api.auth.getCurrentUser()
    .then(user => {
      const currentUser = {currentUser: user};
      this.setState({auth: currentUser},
      this.loadTrips
      )
    })
    }
  }


  render() {
    return (
      <div className="App bg">
      <Navbar
      currentUser={this.state.auth.currentUser}
      handleLogout={this.handleLogout}/>

      <Switch>
        <Route path="/login" render={(routerProps) =>
          (<Login
            {...routerProps}
            handleLogin={this.handleLogin}/>)}/>
        <Route path="/signup" render={(routerProps) =>
          (<Signup
            {...routerProps}/>)}/>
        <Route path="/trips" render={() =>
          <TripContainer
          currentUser={this.state.auth.currentUser}
          trips={this.state.trips}
          loadTrips={this.loadTrips}/>}/>
      </Switch>
      </div>


    );
  }
}



export default withRouter(App);
