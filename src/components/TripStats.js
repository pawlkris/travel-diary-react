import React from 'react';

class TripStats extends React.Component{


  render(){
    const {trips} = this.props

    let workTrips = trips.filter(t => t.work).length
    let leisureTrips = trips.filter(t => t.leisure).length
    let beachTrips = trips.filter(t => t.beach).length
    let familyTrips = trips.filter(t => t.family).length
    let friendsTrips = trips.filter(t => t.friends).length

    return (
      <div className="trip-stats ui container">
      <table className='ui celled table'>
         <thead>
           <tr>
             <th>Trip Tag</th>
             <th>Number of Trips</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Work</td>
             <td>{workTrips}</td>
           </tr>
           <tr>
             <td>Leisure</td>
             <td>{leisureTrips}</td>
           </tr>
           <tr>
             <td>Beach</td>
             <td>{beachTrips}</td>
           </tr>
           <tr>
             <td>Family</td>
             <td>{familyTrips}</td>
           </tr>
           <tr>
             <td>Friends</td>
             <td>{friendsTrips}</td>
           </tr>
         </tbody>
      </table>


      </div>
    )
  }
}

export default TripStats;
