import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{

  render(){
    const loggedIn = !!this.props.currentUser.id
    //need to add logic for sign in / logout, etc.
    return (
      <div className="ui teal inverted menu">
        <div className="header item">
          <h1>Travel Diary</h1>
        </div>
        {loggedIn ?
        (
          <div className="right menu">
            <Link to="/trips" className="item">
               <i className="plane icon"/> All Trips
            </Link>
            <Link to="/trips/new" className="item">
               <i className="plus icon"/> New Trip
            </Link>
            <Link to="/trips/stats" className="item">
              <i className="bar chart icon"/> Trip Stats
            </Link>
            <Link to="/login" className="item" onClick={this.props.handleLogout}>
              <i className="sign out icon"/>Logout
            </Link>
          </div>
        ) : (
        <Link
        to="/login" className="right menu item">
          Sign In
        </Link>
      )}

      </div>
  )
  }
}

export default Navbar;
